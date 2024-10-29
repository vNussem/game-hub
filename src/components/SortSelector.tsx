import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { useGameQueryStore } from "../store";

export const SortSelector = () => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const { setSortOrder, gameQuery } = useGameQueryStore();

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by:{" "}
        {sortOrders.find((order) => order.value === gameQuery.sortOder)
          ?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem key={order.value} onClick={() => setSortOrder(order.value)}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
