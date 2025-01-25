import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "./../assets/logo.png";

export const Navbar = () => {
    return (
        <HStack padding={"8px 16px"}>
            <Image src={logo} width={"100px"} />
        </HStack>
    );
};
