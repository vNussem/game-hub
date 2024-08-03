import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery | null;
}

export const GameHeading = ({ gameQuery }: Props) => {
  return (
    <Heading as={"h1"} fontSize={"5xl"} marginY={3}>
      {`${gameQuery?.platform?.name || ""} ${
        gameQuery?.genre?.name || ""
      } Games`}
    </Heading>
  );
};
