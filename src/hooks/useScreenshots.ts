import { useQueries, useQuery } from "@tanstack/react-query";
import { Trailer } from "../entities/Trailer";
import { APIClient } from "../services/api-client";
import { Screenshot } from "../entities/Screenshot";

export const useScreenshots = (gameId: number) => {
  const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
};
