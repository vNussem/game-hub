import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";
import { CACHE_KEY_GAMES } from "../constants";

import apiClient, { FetchResponse } from "../services/api-client";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
    rating_top: number; 
}



const useGames = (gameQuery: GameQuery | null) => {
    const {data, error, isLoading: loading} = useQuery<Game[], Error>({
        queryKey: [...CACHE_KEY_GAMES, {genre: gameQuery?.genre?.id, platform: gameQuery?.platform?.id, sortOrder: gameQuery?.sortOder}],
        queryFn: () => apiClient.get<FetchResponse<Game>>("/games", {params: {
                    genres: gameQuery?.genre?.id, 
                    parent_platforms: gameQuery?.platform?.id, 
                    ordering: gameQuery?.sortOder,
                    search: gameQuery?.searchText
                  }}).then(res => res.data.results),
                  staleTime: 60 * 1_000
        });
    
    return {data, error, loading};
}

// const useGames = (gameQuery: GameQuery | null) => useData<Game>("/games"
//     , {params: {
//         genres: gameQuery?.genre?.id, 
//         platforms: gameQuery?.platform?.id, 
//         ordering: gameQuery?.sortOder,
//         search: gameQuery?.searchText
//       }}
//     , [gameQuery])

export default useGames;

