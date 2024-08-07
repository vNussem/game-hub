import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { CACHE_KEY_GAMES } from "../constants";
import { APIClient, FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new APIClient<Game>("/games");

export const useGames = (gameQuery: GameQuery | null) => {
  const {
    data,
    error,
    isLoading: loading,
  } = useQuery<Game[], Error>({
    queryKey: [
      ...CACHE_KEY_GAMES,
      {
        genre: gameQuery?.genre?.id,
        platform: gameQuery?.platform?.id,
        sortOrder: gameQuery?.sortOder,
      },
    ],
    // queryFn: () => apiClient.get<FetchResponse<Game>>("/games", {params: {
    //             genres: gameQuery?.genre?.id,
    //             parent_platforms: gameQuery?.platform?.id,
    //             ordering: gameQuery?.sortOder,
    //             search: gameQuery?.searchText
    //           }}).then(res => res.data.results),
    queryFn: () =>
      apiClient.get({
        params: {
          genres: gameQuery?.genre?.id,
          parent_platforms: gameQuery?.platform?.id,
          ordering: gameQuery?.sortOder,
          search: gameQuery?.searchText,
        },
      }),
    staleTime: 60 * 1_000,
  });

  return { data, error, loading };
};
