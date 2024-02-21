export type EventValue = {
  value: string | number;
  currency: string;
  string: string;
};

export type OptimizeImageProps = {
  src: string;
  alt: string;
  className: string;
};

export type TrackingData = {
  trackingGUID: string;
  email: string;
  phoneNumber: string;
};

export type ChildNode = {
  children: React.ReactNode;
};

export type ConversionTrackingEvent = {
  eventName: string;
  eventValue: string;
  eventCurrency: string;
  email: string;
  phoneNumber: string;
  clientId: string;
  platForm: string;
  uri: string;
};
