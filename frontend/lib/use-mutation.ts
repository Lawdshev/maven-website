import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import axiosInstance from "./axios-instance";
import { AxiosRequestHeaders } from "axios";

type HttpMethod = "post" | "put" | "patch" | "delete";

interface UseApiMutationProps<TData, TVariables> {
  url: string;
  method: HttpMethod;
  options?: UseMutationOptions<TData, Error, TVariables>;
  headers?: AxiosRequestHeaders;
}

export function useApiMutation<TData = unknown, TVariables = unknown>({
  url,
  method,
  options,
  headers,
}: UseApiMutationProps<TData, TVariables>) {
  return useMutation<TData, Error, TVariables>({
    mutationFn: async (variables: TVariables) => {
      const isFormData = variables instanceof FormData;

      const response = await axiosInstance.request<TData>({
        url,
        method,
        data: variables,
        headers: {
          ...headers,
          ...(isFormData && { "Content-Type": "multipart/form-data" }),
        },
      });

      return response.data;
    },
    ...options,
  });
}