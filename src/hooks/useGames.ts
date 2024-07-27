import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

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
  }
  
  interface FetchGamesReponse {
    count: number;
    results: Game[];
}

const useGames = () => {
    const [games, setGameas] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      const controller = new AbortController();
      setLoading(true);

      apiClient
        .get<FetchGamesReponse>("/games", {signal: controller.signal})
        .then((res) => {
            setGameas(res.data.results);
            setLoading(false);
        })
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message);
            setLoading(false);
        })
        // .finally(() => setLoading(false));

        return () => controller.abort();
    }, []);

    return {games, error, loading};
};

export default useGames;

