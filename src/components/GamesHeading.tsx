import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface Props {
    gameQuery: GameQuery;
}

export const GamesHeading = ({ gameQuery }: Props) => {
    const selectedGenre = useGenre(gameQuery.genreId);
    const selectedPlatform = usePlatform(gameQuery.platformId);

    return (
        <Heading size={"lg"} marginY={2}>{`${selectedPlatform?.name || ""} ${
            selectedGenre?.name || ""
        } Games`}</Heading>
    );
};
