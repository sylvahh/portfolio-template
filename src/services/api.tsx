import axios, { AxiosRequestConfig } from 'axios';

const baseUrl = import.meta.env.VITE_BASE_URL;
export type METHODS = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

export async function makeApiRequest(
  url: string,
  method: METHODS,
  body?: object,
  token?: string,
  isFromData?: boolean
) {
  const headers: HeadersInit = {
    'Content-Type': `${
      isFromData ? 'multipart/form-data' : 'application/json'
    }`,
    Accept: 'application/json',
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const options: AxiosRequestConfig = {
    method,
    headers,
    baseURL: baseUrl,
    url,
    data: body,
  };
  return axios(options)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      throw error.response;
    });
}
