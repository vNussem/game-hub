import { useInfiniteQuery } from "@tanstack/react-query";
import { CACHE_KEY_GAMES } from "../constants";
import { APIClient, FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";
import ms from "ms";
import { useGameQueryStore } from "../store";

export interface Game {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new APIClient<Game>("/games");

export const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: [...CACHE_KEY_GAMES, gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
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
};
