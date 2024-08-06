import axios from "axios";
import { Genre } from "../hooks/useGenres";

export default axios.create({
    baseURL: "https://api.rawg.io/api", 
    params: {
        key: "9786b207a5414272bab8d0a49e88cd8c"
    }
});

const axiosClient =  axios.create({
    baseURL: "https://api.rawg.io/api", 
    params: {
        key: "9786b207a5414272bab8d0a49e88cd8c"
    }
});

export interface FetchResponse<T> {
    number: number;
    results: T[];
}


export class ApiClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    get = () => {
        return axiosClient.get<FetchResponse<T>>(this.endpoint).then(res => res.data.results);
    }
}