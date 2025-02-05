import { HStack, Image } from "@chakra-ui/react";
import logo from "./../assets/logo.png";
import { ColorModeSwitch } from "./ColorModeSwitch";
import { SearchInput } from "./SearchInput";

interface Props {
    onSearch: (searchText: string) => void;
}

export const Navbar = ({ onSearch }: Props) => {
    return (
        <HStack padding={"8px 16px"}>
            <Image src={logo} width={"100px"} />
            <SearchInput onSubmit={(searchText) => onSearch(searchText)} />
            <ColorModeSwitch />
        </HStack>
    );
};
