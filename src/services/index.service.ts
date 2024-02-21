import axiosFetch from "@/libs/axios.interceptor";
import { GetCountriesPayloadI } from "@/libs/interfaces";
import { api } from "./apiURLs";

export const getCountries = async (payload: GetCountriesPayloadI) => {
  const response = await axiosFetch.post(api.getCountries, {
    ...payload,
  });
  return response;
};
