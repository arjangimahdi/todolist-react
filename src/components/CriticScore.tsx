import { Badge } from "@chakra-ui/react";

interface Props {
    score: number;
}

export const CriticScore = ({ score }: Props) => {
    const color = score > 75 ? "green" : score > 50 ? "yellow" : "red";
    return (
        <Badge paddingX={2} borderRadius={"4px"} colorScheme={color}>
            {score}
        </Badge>
    );
};
