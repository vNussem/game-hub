import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9786b207a5414272bab8d0a49e88cd8c",
  },
});

export interface FetchResponse<T> {
  number: number;
  results: T[];
}

export class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get = (axiosRequerstConfing: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, axiosRequerstConfing)
      .then((res) => res.data.results);
  };
}
