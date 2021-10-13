import useSWR from 'swr';
import { AxiosRequestConfig, Method } from 'axios';
import api from '../services/api';

export const useFetch = <Data = any, Error = any>(url: string, method: Method | undefined = 'get', options?: any) => {
  const { data, error, mutate } = useSWR<Data, Error>(url, async (): Promise<any> => {
    const response = await api(url, { method, ...options });
    return response.data;
  });

  return { data, error, mutate };
};
