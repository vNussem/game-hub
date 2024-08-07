import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { usePlatform, Platform } from "../hooks/usePlatforms";

interface Properties {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

export const PlatformSelector = ({
  onSelectedPlatform,
  selectedPlatform,
}: Properties) => {
  const { data, error } = usePlatform();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.map((platform) => (
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
