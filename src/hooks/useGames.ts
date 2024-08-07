import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { CACHE_KEY_GAMES } from "../constants";
import { APIClient, FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";
import ms from "ms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new APIClient<Game>("/games");

export const useGames = (gameQuery: GameQuery | null) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: [...CACHE_KEY_GAMES, gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.get({
        params: {
          genres: gameQuery?.genreId,
          parent_platforms: gameQuery?.platformId,
          ordering: gameQuery?.sortOder,
          search: gameQuery?.searchText,
          page: pageParam,
          page_size: 10,
        },
      }),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.next ? allPages.length + 1 : undefined,
    staleTime: ms("1m"),
  });
