import { Platform } from "../entities/Platform";
import { usePlatforms } from "./usePlatforms";

export const usePlatform = (id?: number) => {
  const { data: platforms } = usePlatforms();
  return platforms?.results.find((platform) => platform.id === id);
};
