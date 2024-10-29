import { Heading } from "@chakra-ui/react";
import { useGenre } from "../hooks/useGenre";
import { usePlatform } from "../hooks/usePlatform";
import { useGameQueryStore } from "../store";

export const GameHeading = () => {
  const { gameQuery } = useGameQueryStore();

  return (
    <Heading as={"h1"} fontSize={"5xl"} marginY={3}>
      {`${usePlatform(gameQuery?.platformId)?.name || ""} ${
        useGenre(gameQuery?.genreId)?.name || ""
      } Games`}
    </Heading>
  );
};
