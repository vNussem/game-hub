import { useQueries, useQuery } from "@tanstack/react-query";
import useData from "./useData";
import { Platform } from "./useGames";
import { CACHE_KEY_PLATFORMS } from "../constants";
import apiClient from "../services/api-client";

import {FetchResponse} from "../services/api-client"


const usePlatform = () => useQuery({
    queryKey: CACHE_KEY_PLATFORMS,
    queryFn: () => apiClient.get<FetchResponse<Platform>>("/platforms/lists/parents").then(res => res.data.results),
    staleTime: 24 * 60 * 60 * 1_0000
})


export default usePlatform;