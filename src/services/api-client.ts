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
  next: string | null;
}

export class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (axiosRequerstConfing: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, axiosRequerstConfing)
      .then((res) => res.data);
  };

  get = (id: number | string) =>
    axiosInstance.get<T>(this.endpoint + "/" + id).then((res) => res.data);
}
