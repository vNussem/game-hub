import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { usePlatforms, Platform } from "../hooks/usePlatforms";
import { usePlatform } from "../hooks/usePlatform";
import { useGameQueryStore } from "../store";

export const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  const { gameQuery, setPlatformId } = useGameQueryStore();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {usePlatform(gameQuery.platformId)?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => setPlatformId(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
