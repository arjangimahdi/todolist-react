import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
    selectedOrder: string;
    onSelectOrder: (sortOrder: string) => void;
}

export const SortSelector = ({ onSelectOrder, selectedOrder }: Props) => {
    const sortOrders = [
        { value: "", label: "Relevant" },
        { value: "name", label: "Name" },
        { value: "-released", label: "Released date" },
        { value: "-added", label: "Date added" },
        { value: "-rating", label: "Average rating" },
        { value: "-metacritic", label: "Popularity" },
    ];

    const currentSortOrder = sortOrders.find((o) => o.value === selectedOrder);

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {currentSortOrder?.label || "Relevant"}
            </MenuButton>
            <MenuList>
                {sortOrders.map((order) => {
                    return (
                        <MenuItem key={order.value} value={order.value} onClick={() => onSelectOrder(order.value)}>
                            {order.label}
                        </MenuItem>
                    );
                })}
            </MenuList>
        </Menu>
    );
};
