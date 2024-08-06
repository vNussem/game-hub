
import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import useData from "./useData";
import { CACHE_KEY_GENRES } from "../constants";
import { ApiClient } from "../services/api-client";


export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const apiClient = new ApiClient<Genre>("/genres");

const useGenres = () => {
    const {data, isLoading: loading, error} = useQuery({
        queryKey: CACHE_KEY_GENRES, 
        queryFn: apiClient.get, 
        staleTime: 24 * 60 * 60 * 1_000, 
        initialData: genres
    });

    return { data, loading, error };
}

export default useGenres;

