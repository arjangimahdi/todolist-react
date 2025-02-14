import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { getCroppedImageUrl } from "../services/image-url";
import useGameStore from "../store";

export const GenreList = () => {
    const setSelectedGenreId = useGameStore((s) => s.setGenreId);
    const selectedGenreId = useGameStore((s) => s.gameQuery.genreId);
    const { data, isLoading, error } = useGenres();

    if (error) return null;

    if (isLoading) return <Spinner />;

    return (
        <List>
            {data?.results.map((genre) => {
                return (
                    <ListItem key={genre.id} paddingY="4px">
                        <HStack>
                            <Image
                                src={getCroppedImageUrl(genre.image_background)}
                                boxSize="32px"
                                borderRadius="4px"
                                marginRight="4px"
                            />
                            <Button
                                fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
                                onClick={() => setSelectedGenreId(genre.id)}
                                variant={"link"}
                                fontSize="large"
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                );
            })}
        </List>
    );
};
