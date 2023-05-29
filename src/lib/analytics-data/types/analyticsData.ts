import type { AxiosRequestConfig } from "axios";

export type AnalyticsDataOptions = {
  propertyId: string;
  axiosOptions?: AxiosRequestConfig;
  store?: StoreConfig;
};
export type AnalyticsDataDefaultOptions = {
  propertyId: string;
  axiosOptions: AxiosRequestConfig;
  store: StoreConfig;
};

export type StoreConfig = {
  key: string;
  useLocalStorage: boolean;
};
