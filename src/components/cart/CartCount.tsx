import { UButton } from "../UButton";

interface CartCountProps {
    count: number;
    clear: () => void;
}

export const CartCount = ({ count, clear }: CartCountProps) => {
    return (
        <div className="flex flex-col">
            <span className="text-lg font-extrabold">Cart Count: {count}</span>
            <UButton color="red" onClick={clear}>
                Clear
            </UButton>
        </div>
    );
};
