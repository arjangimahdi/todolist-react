import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar";
import { GamesGrid } from "./components/GamesGrid";
import { GenreList } from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import { PlatformSelector } from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import { SortSelector } from "./components/SortSelector";

export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
    sort: string;
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
                <Navbar />
            </GridItem>
            <Show above="lg">
                <GridItem padding="16px" area={"aside"}>
                    <GenreList
                        selectedGenre={gameQuery.genre}
                        onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
                    />
                </GridItem>
            </Show>
            <GridItem area={"main"} paddingX="16px">
                <Flex>
                    <Box marginRight={3}>
                        <PlatformSelector
                            selectedPlatform={gameQuery.platform}
                            onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })}
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
