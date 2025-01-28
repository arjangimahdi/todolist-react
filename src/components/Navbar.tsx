import { HStack, Image } from "@chakra-ui/react";
import logo from "./../assets/logo.png";
import { ColorModeSwitch } from "./ColorModeSwitch";

export const Navbar = () => {
    return (
        <HStack padding={"8px 16px"} justifyContent={"space-between"}>
            <Image src={logo} width={"100px"} />
            <ColorModeSwitch />
        </HStack>
    );
};
