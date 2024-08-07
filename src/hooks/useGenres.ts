import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GENRES } from "../constants";
import genres from "../data/genres";
import { APIClient } from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre>("/genres");

export const useGenres = () => {
  const {
    data,
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: CACHE_KEY_GENRES,
    queryFn: apiClient.get,
    staleTime: 24 * 60 * 60 * 1_000,
    initialData: { results: genres, number: genres.length, next: null },
  });

  return { data, loading, error };
};
