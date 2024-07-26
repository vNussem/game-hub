import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Game {
    id: number;
    name: string;
    background_image: string;
  }
  
  interface FetchGamesReponse {
    count: number;
    results: Game[];
}

const useGames = () => {
    const [games, setGameas] = useState<Game[]>([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
      const controller = new AbortController();

      apiClient
        .get<FetchGamesReponse>("/games", {signal: controller.signal})
        .then((res) => setGameas(res.data.results))
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message)
        });

        return () => controller.abort();
    }, []);

    return {games, error};
};

export default useGames;

