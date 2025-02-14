import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar";
import { GamesGrid } from "./components/GamesGrid";
import { GenreList } from "./components/GenreList";
import { PlatformSelector } from "./components/PlatformSelector";
import { SortSelector } from "./components/SortSelector";

function App() {
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
                    <GenreList />
                </GridItem>
            </Show>
            <GridItem area={"main"} paddingX="16px">
                <Flex>
                    <Box marginRight={3}>
                        <PlatformSelector />
                    </Box>
                    <SortSelector />
                </Flex>
                <GamesGrid />
            </GridItem>
        </Grid>
    );
}
export default App;
