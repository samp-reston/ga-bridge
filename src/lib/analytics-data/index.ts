import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  Method,
} from "axios";
import defu from "defu";
import {
  AnalyticsDataDefaultOptions,
  AnalyticsDataOptions,
} from "./types/analyticsData";
import { isBrowser } from "lib/utils/utils";

const defaults: Required<AnalyticsDataOptions> = {
  propertyId: "",
  axiosOptions: {},
  store: {
    key: "analyticsData_jwt",
    useLocalStorage: false,
  },
};

export class AnalyticsData {
  private axios: AxiosInstance;
  public options: AnalyticsDataDefaultOptions;

  /**
   * Create a new AnalyticsData client.
   *
   * @param {AnalyticsDataOptions} options - Options for configuring the AnalyticsData client.
   * @param {string} options.propertyId - The Google Analytics 4 property ID.
   * @param {AxiosRequestConfig} options.axiosOptions - Options for configuring the Axios client.
   * @param {StoreConfig} options.store - Options for configuring the storage of the JWT token.
   */
  constructor(options: AnalyticsDataOptions) {
    this.options = defu(
      (options as AnalyticsDataDefaultOptions) || {},
      defaults
    );

    this.axios = axios.create({
      baseURL: new URL(
        process.env.ANALYTICS_DATA_ENPOINT ||
          "https://analyticsdata.googleapis.com/v1beta"
      ).href,
      ...this.options.axiosOptions,
    });

    this.axios.interceptors.request.use((config) => {
      const token = this.getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
  }

  /**
   * Make a request to the Analytics Data API.
   *
   * @param {Method} method - HTTP method
   * @param {string} url - Override default url
   * @param {AxiosRequestConfig} axiosConfig - Custom axios config
   * @returns Promise<T>
   */
  private async request<T>(
    method: Method,
    url: string,
    axiosConfig?: AxiosRequestConfig
  ): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axios.request({
        method,
        url,
        ...axiosConfig,
      });
      return response.data;
    } catch (error) {
      const e = error as AxiosError;
      if (!e.response) {
        throw {
          data: null,
          error: {
            status: 500,
            name: "UnknownError",
            message: e.message,
            details: e,
          },
        };
      } else {
        throw e.response.data;
      }
    }
  }

  /**
   * Returns the requested analytics for the dimensions and metrics specified in the body parameter.
   *
   * @param {RunReportRequestBody} body - Parameters for the request, where dimensions and metrics are required.
   * @returns Promise<RunReportResponseBody>
   */
  public async runReport(
    body: RunReportRequestBody
  ): Promise<RunReportResponseBody> {
    return this.request<RunReportResponseBody>(
      "POST",
      "/properties:runReport",
      {
        data: body,
      }
    );
  }

  /**
   * Retrieve token from chosen storage
   *
   * @returns string | null
   */
  private getToken(): string | null {
    const { useLocalStorage, key } = this.options.store;
    if (isBrowser()) {
      const token = useLocalStorage ? window.localStorage.getItem(key) : null;

      if (typeof token === "undefined") return null;

      return token;
    }

    return null;
  }
}

type Test<T> = T extends (infer U extends DimensionBody)[]
  ? {
      dimensionHeaders: { name: U }[];
    }
  : "ping";

const dims: DimensionBody[] = [{ name: "achievementId" }, { name: "adFormat" }];

const dims2 = [
  "achievementId" as const,
  "adFormat" as const,
];

type T0 = Test<typeof dims>;
type T1 = Test<typeof dims2>;
