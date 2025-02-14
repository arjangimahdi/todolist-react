import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import useGameStore from "../store";

export const PlatformSelector = () => {
    const { data, error } = usePlatforms();
    const { data: platforms } = usePlatforms();

    const selectedPlatformId = useGameStore((s) => s.gameQuery.platformId);
    const setSelectedPlatformId = useGameStore((s) => s.setPlatformId);

    const selectedPlatform = platforms.results.find((p) => p.id === selectedPlatformId);

    if (error) return null;
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {selectedPlatformId ? selectedPlatform?.name : "Platforms"}
            </MenuButton>
            <MenuList>
                {data.results.map((platform) => {
                    return (
                        <MenuItem key={platform.id} onClick={() => setSelectedPlatformId(platform.id)}>
                            {platform.name}
                        </MenuItem>
                    );
                })}
            </MenuList>
        </Menu>
    );
};
