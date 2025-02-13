import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
    onSelectPlatform: (platformId: number) => void;
    selectedPlatformId?: number;
}

export const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
    const { data, error } = usePlatforms();

    const { data: platforms } = usePlatforms();

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
                        <MenuItem key={platform.id} onClick={() => onSelectPlatform(platform.id)}>
                            {platform.name}
                        </MenuItem>
                    );
                })}
            </MenuList>
        </Menu>
    );
};
