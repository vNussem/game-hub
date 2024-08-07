import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import { useGenre } from "../hooks/useGenre";
import { usePlatform } from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery | null;
}

export const GameHeading = ({ gameQuery }: Props) => {
  return (
    <Heading as={"h1"} fontSize={"5xl"} marginY={3}>
      {`${usePlatform(gameQuery?.platformId)?.name || ""} ${
        useGenre(gameQuery?.genreId)?.name || ""
      } Games`}
    </Heading>
  );
};
