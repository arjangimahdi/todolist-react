import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { GameCard } from "./GameCard";
import { GameCardSkeleton } from "./GameCardSkeleton";
import { GameCardContainer } from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";

interface Props {
    genre: Genre | null;
}

export const GamesGrid = ({ genre }: Props) => {
    const { data, error, loading } = useGames(genre as Genre);
    const skeletons = [1, 2, 3, 4, 5, 6];
    return (
        <>
            {error && <Text color={"red"}>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing="16px" padding="16px">
                {loading
                    ? skeletons.map((item) => (
                          <GameCardContainer key={item}>
                              <GameCardSkeleton />
                          </GameCardContainer>
                      ))
                    : data.map((game) => (
                          <GameCardContainer key={game.id}>
                              <GameCard game={game} />
                          </GameCardContainer>
                      ))}
            </SimpleGrid>
        </>
    );
};
