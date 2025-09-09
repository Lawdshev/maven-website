import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import axiosInstance from "./axios-instance";

interface UseApiQueryProps<T> {
  url: string;
  params?: Record<string, unknown>;
  options?: Omit<UseQueryOptions<T, Error>, "queryKey" | "queryFn">;
  enabled?: boolean;
}

export function useApiQuery<T = unknown>({
  url,
  params,
  options,
  enabled = true,
}: UseApiQueryProps<T>) {
  return useQuery<T, Error>({
    queryKey: [url, params],
    queryFn: async () => {
      const response = await axiosInstance.get<T>(url, { params });
      return response.data;
    },
    enabled,
    ...options,
  });
}