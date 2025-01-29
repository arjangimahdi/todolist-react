import { Grid, GridItem, Show, Text } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar";
import { GamesGrid } from "./components/GamesGrid";
import { GenreList } from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

function App() {
    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

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
                    <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)} />
                </GridItem>
            </Show>
            <GridItem area={"main"}>
                <GamesGrid genre={selectedGenre} />
            </GridItem>
        </Grid>
    );
}
export default App;
