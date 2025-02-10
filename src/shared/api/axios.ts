import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ApiClient } from '.';

export type HttpClient = {
  get: <T>(url: string, headers?: Record<string, string>) => Promise<T>;
  post: <T>(url: string, data?: unknown, headers?: Record<string, string>) => Promise<T>;
  put: <T>(url: string, data?: unknown, headers?: Record<string, string>) => Promise<T>;
  delete: <T>(url: string, headers?: Record<string, string>) => Promise<T>;
};

export const httpClient: HttpClient = {
  get: async <T>(url: string, headers?: Record<string, string>): Promise<T> => {
    const config: AxiosRequestConfig = { headers };
    const response: AxiosResponse<T> = await axios.get(url, config);
    return response.data;
  },

  post: async <T>(url: string, data?: unknown, headers?: Record<string, string>): Promise<T> => {
    const config: AxiosRequestConfig = { headers };
    const response: AxiosResponse<T> = await axios.post(url, data, config);
    return response.data;
  },

  put: async <T>(url: string, data?: unknown, headers?: Record<string, string>): Promise<T> => {
    const config: AxiosRequestConfig = { headers };
    const response: AxiosResponse<T> = await axios.put(url, data, config);
    return response.data;
  },

  delete: async <T>(url: string, headers?: Record<string, string>): Promise<T> => {
    const config: AxiosRequestConfig = { headers };
    const response: AxiosResponse<T> = await axios.delete(url, config);
    return response.data;
  },
};

export const apiClient = new ApiClient(httpClient, process.env.NEXT_PUBLIC_API_URL);
