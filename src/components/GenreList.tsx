import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import { getCroppedImageUrl } from "../services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

export const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
    const { data, loading, error } = useGenres();

    if (error) return null;

    if (loading) return <Spinner />;

    return (
        <List>
            {data.map((genre) => {
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
                                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
                                onClick={() => onSelectGenre(genre)}
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
