import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameStore from "../store";

export const GamesHeading = () => {
    const selectedGenreId = useGameStore((s) => s.gameQuery.genreId);
    const selectedGenre = useGenre(selectedGenreId);
    const selectedPlatformId = useGameStore((s) => s.gameQuery.platformId);
    const selectedPlatform = usePlatform(selectedPlatformId);

    return (
        <Heading size={"lg"} marginY={2}>{`${selectedPlatform?.name || ""} ${
            selectedGenre?.name || ""
        } Games`}</Heading>
    );
};
