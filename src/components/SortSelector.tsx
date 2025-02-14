import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameStore from "../store";

export const SortSelector = () => {
    const sortOrders = [
        { value: "", label: "Relevant" },
        { value: "name", label: "Name" },
        { value: "-released", label: "Released date" },
        { value: "-added", label: "Date added" },
        { value: "-rating", label: "Average rating" },
        { value: "-metacritic", label: "Popularity" },
    ];

    const selectedSortOrder = useGameStore((s) => s.gameQuery.sortOrder);
    const setSelectedSortOrder = useGameStore((s) => s.setSortOrder);

    const currentSortOrder = sortOrders.find((o) => o.value === selectedSortOrder);

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {currentSortOrder?.label || "Relevant"}
            </MenuButton>
            <MenuList>
                {sortOrders.map((order) => {
                    return (
                        <MenuItem
                            key={order.value}
                            value={order.value}
                            onClick={() => setSelectedSortOrder(order.value)}
                        >
                            {order.label}
                        </MenuItem>
                    );
                })}
            </MenuList>
        </Menu>
    );
};
