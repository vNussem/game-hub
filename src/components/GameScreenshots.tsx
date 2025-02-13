import { SimpleGrid, Spinner, Image } from "@chakra-ui/react";
import { useScreenshots } from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

export const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return <Spinner />;
  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((file) => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  );
};
