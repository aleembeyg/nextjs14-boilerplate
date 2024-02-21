import axios from "axios";
import { signOut } from "next-auth/react";
import * as Sentry from "@sentry/nextjs";
import { baseURL } from "../services/baseURL";

const axiosFetch = axios.create({
  baseURL: baseURL
});

let isRefreshing = false;
let refreshQueue: any[] = [];

const processQueue = () => {
  while (refreshQueue.length) {
    const request = refreshQueue.shift();
    request.resolve(axiosFetch(request.config));
  }
};

axiosFetch.interceptors.request.use(
  async (request) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosFetch.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalConfig = error.config;
    try {
      if (Sentry) Sentry.captureException(error);
    } catch (error) {
      console.log(error);
    }
    if (
      error.response &&
      error.response.status === 401 &&
      !originalConfig._retry
    ) {
      originalConfig._retry = true;
      try {
        localStorage.removeItem("getCards");
        if (localStorage.getItem("token")) {
          if (!isRefreshing) {
            isRefreshing = true;
            const token = JSON.parse(
              localStorage.getItem("token")?.toString() as any
            );
            const axiosRequest = axios;
            const rs: any = await axiosRequest.post(
              `${process.env.NEXT_PUBLIC_API_URL}token/refresh`,
              {
                token: token.token.toString().replaceAll("request", ""),
                refreshToken: token.refreshToken
                  .toString()
                  .replaceAll("request", ""),
              }
            );
            if (rs.data) {
              originalConfig.headers = {
                ...originalConfig.headers,
                authorization: `Bearer ${rs.data.token
                  .toString()
                  .replaceAll("request", "")}`,
              };
              localStorage.setItem("token", JSON.stringify(rs.data));
            }
            isRefreshing = false;
            processQueue(); // Process any queued requests
            return axiosFetch(originalConfig);
          } else {
            // If a refresh token request is already in progress, queue the original request
            return new Promise((resolve, reject) => {
              refreshQueue.push({
                resolve,
                config: originalConfig,
              });
            });
          }
        }
      } catch (error) {
        setTimeout(() => {
          signOut({ callbackUrl: "/dashboard/login" });
        }, 1000);
        try {
          if ((window as any).UA)
            (window as any).UA.then((sdk: any) => {
              if (sdk.channel) {
                sdk.channel.namedUser.remove();
              }
            });
        } catch (error) {
          console.log(error);
        }
        return Promise.reject(error);
      }
    } else {
      return Promise.reject(error);
    }
  }
);

export default axiosFetch;
