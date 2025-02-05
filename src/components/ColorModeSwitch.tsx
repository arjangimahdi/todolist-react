import { HStack, Switch, useColorMode, Text } from "@chakra-ui/react";

export const ColorModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <HStack>
            <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
            <Text whiteSpace="nowrap">Dark Mode</Text>
        </HStack>
    );
};
