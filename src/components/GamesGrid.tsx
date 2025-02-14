import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import { GameCard } from "./GameCard";
import { GameCardContainer } from "./GameCardContainer";
import { GamesHeading } from "./GamesHeading";

export const GamesGrid = () => {
    const { data, error, hasNextPage, fetchNextPage } = useGames();

    const fetchGamesCount =
        data?.pages.reduce((total, page) => {
            return total + page.results.length;
        }, 0) || 0;

    return (
        <>
            {error && <Text color={"red"}>{error.message}</Text>}
            <InfiniteScroll
                loader={<Spinner />}
                hasMore={!!hasNextPage}
                dataLength={fetchGamesCount}
                next={() => fetchNextPage()}
            >
                <GamesHeading />
                <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing="16px" paddingY="16px">
                    {data?.pages.map((page, index) => {
                        return (
                            <React.Fragment key={index}>
                                {page?.results.map((game) => (
                                    <GameCardContainer key={game.id}>
                                        <GameCard game={game} />
                                    </GameCardContainer>
                                ))}
                            </React.Fragment>
                        );
                    })}
                </SimpleGrid>
            </InfiniteScroll>
        </>
    );
};
