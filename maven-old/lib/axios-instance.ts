/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, {
  type AxiosError,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";
import { appConfig } from "@/config/app-config";
import cookies from "js-cookie";

const baseURL = appConfig.baseUrl;

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json, text/plain, */*",
  },
});

const onRequest = (
  request: AxiosRequestConfig
): InternalAxiosRequestConfig<any> => {
  const token = cookies.get("access_token");
  if (!request.headers) return request as InternalAxiosRequestConfig<any>;
  request.headers.Authorization = `Bearer ${token}`;
  return request as InternalAxiosRequestConfig<any>;
};

const onRequestError = async (error: AxiosError): Promise<AxiosError> => {
  return await Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onResponseError = async (error: AxiosError | any) => {
  return await Promise.reject(error?.response?.data || error.message);
};

axiosInstance.interceptors.request.use(onRequest, onRequestError);
axiosInstance.interceptors.response.use(onResponse, onResponseError);

export default axiosInstance;