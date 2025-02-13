import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar";
import { GamesGrid } from "./components/GamesGrid";
import { GenreList } from "./components/GenreList";
import { useState } from "react";
import { PlatformSelector } from "./components/PlatformSelector";
import { SortSelector } from "./components/SortSelector";

export interface GameQuery {
    genreId?: number;
    platformId?: number;
    sort: string;
    searchText: string;
}

function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

    return (
        <Grid
            templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main"`,
            }}
            templateColumns={{
                base: "1fr",
                lg: "240px 2fr",
            }}
        >
            <GridItem area={"nav"}>
                <Navbar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} />
            </GridItem>
            <Show above="lg">
                <GridItem padding="16px" area={"aside"}>
                    <GenreList
                        selectedGenreId={gameQuery.genreId}
                        onSelectGenre={(genreId) => setGameQuery({ ...gameQuery, genreId })}
                    />
                </GridItem>
            </Show>
            <GridItem area={"main"} paddingX="16px">
                <Flex>
                    <Box marginRight={3}>
                        <PlatformSelector
                            selectedPlatformId={gameQuery.platformId}
                            onSelectPlatform={(platformId) => setGameQuery({ ...gameQuery, platformId })}
                        />
                    </Box>
                    <SortSelector
                        selectedOrder={gameQuery.sort}
                        onSelectOrder={(sort) => setGameQuery({ ...gameQuery, sort })}
                    />
                </Flex>
                <GamesGrid gameQuery={gameQuery} />
            </GridItem>
        </Grid>
    );
}
export default App;
