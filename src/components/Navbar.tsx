import { HStack, Image } from "@chakra-ui/react";
import logo from "./../assets/logo.png";
import { ColorModeSwitch } from "./ColorModeSwitch";
import { SearchInput } from "./SearchInput";

export const Navbar = () => {
    return (
        <HStack padding={"8px 16px"}>
            <Image src={logo} width={"100px"} />
            <SearchInput />
            <ColorModeSwitch />
        </HStack>
    );
};
