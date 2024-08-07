import { useGenres } from "./useGenres";

export const useGenre = (id?: number) =>
  useGenres().data?.results.find((genre) => genre.id === id);
