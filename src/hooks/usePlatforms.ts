import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_PLATFORMS } from "../constants";
import { APIClient, FetchResponse } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

export const usePlatforms = () => {
  const { data, error } = useQuery({
    queryKey: CACHE_KEY_PLATFORMS,
    queryFn: apiClient.get,
    staleTime: 24 * 60 * 60 * 1_0000,
  });

  return { data, error };
};
