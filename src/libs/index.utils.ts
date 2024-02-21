import { v4 as uuidv4 } from "uuid";
import { api } from "@/services/apiURLs";
import axiosFetch from "./axios.interceptor";
import { TriggerSource } from "./enums";
import { EventValue, TrackingData, ConversionTrackingEvent } from "./types";
import { AxiosResponse } from "axios";

const callTrackingAPI = async (
  paramConversionTrackingEvent: ConversionTrackingEvent
) => {
  const res = await axiosFetch
    .post(api.sendConversionTracking, paramConversionTrackingEvent)
    .then((res: AxiosResponse) => {
      //You can do further functionality here
    })
    .catch((error: any) => {
      console.error(error);
    });
};

export const conversionTracking = (
  source: TriggerSource,
  name: string,
  eventValue: EventValue = { value: "", currency: "", string: "" }
) => {
  let data: TrackingData = {
    trackingGUID: "",
    email: "",
    phoneNumber: "",
  };

  if (window.localStorage.getItem("trackingapidata")) {
    data = JSON.parse(window.localStorage.getItem("trackingapidata") || "");
  } else {
    data.trackingGUID = uuidv4();
    window.localStorage.setItem("trackingapidata", JSON.stringify(data));
  }

  let paramConversionTrackingEvent: ConversionTrackingEvent = {
    eventName: name,
    eventValue: eventValue
      ? parseFloat(eventValue.value.toString()).toFixed(2).toString()
      : "",
    eventCurrency: eventValue ? eventValue.currency : "",
    email: data.email,
    phoneNumber: "",
    clientId: data.trackingGUID,
    platForm: "",
    uri: window ? window.location.href : "",
  };

  const triggerValue = eventValue
    ? eventValue.value
      ? {
          value: parseFloat(eventValue.value.toString()).toFixed(2),
          currency: eventValue.currency,
        }
      : { value: eventValue.string }
    : "";
  if ((source & TriggerSource.All) == TriggerSource.All) {
    if ((window as any).gtag) {
      if (triggerValue != "") {
        (window as any).gtag("event", name, triggerValue);
      } else {
        (window as any).gtag("event", name);
      }
      paramConversionTrackingEvent.platForm = "FB";
      callTrackingAPI(paramConversionTrackingEvent);
      paramConversionTrackingEvent.platForm = "AirShip";
      callTrackingAPI(paramConversionTrackingEvent);
    } else {
      paramConversionTrackingEvent.platForm = "ALL";
      callTrackingAPI(paramConversionTrackingEvent);
    }
  } else {
    if ((source & TriggerSource.GTV4) == TriggerSource.GTV4) {
      if ((window as any).gtag) {
        if (triggerValue != "") {
          (window as any).gtag("event", name, triggerValue);
        } else {
          (window as any).gtag("event", name);
        }
      } else {
        paramConversionTrackingEvent.platForm = "GA4";
        callTrackingAPI(paramConversionTrackingEvent);
      }
    }
    if ((source & TriggerSource.FB) == TriggerSource.FB) {
      paramConversionTrackingEvent.platForm = "FB";
      callTrackingAPI(paramConversionTrackingEvent);
    }

    if ((source & TriggerSource.Airship) == TriggerSource.Airship) {
      paramConversionTrackingEvent.platForm = "AirShip";
      callTrackingAPI(paramConversionTrackingEvent);
    }
  }
};
