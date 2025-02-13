import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { getCroppedImageUrl } from "../services/image-url";

interface Props {
    onSelectGenre: (genreId: number) => void;
    selectedGenreId?: number;
}

export const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
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
                                onClick={() => onSelectGenre(genre.id)}
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
