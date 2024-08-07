import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { usePlatform, Platform } from "../hooks/usePlatforms";

interface Properties {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}

export const PlatformSelector = ({
  onSelectedPlatform,
  selectedPlatformId,
}: Properties) => {
  const { data, error } = usePlatform();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {data?.results.find((platform) => platform.id === selectedPlatformId)
          ?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectedPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
