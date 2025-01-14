import { ReactNode } from "react";

interface UButtonProps {
    children: ReactNode;
    color?: "red" | "blue" | "green";
    onClick: () => void;
}

export const UButton = ({ children, color = "blue", onClick }: UButtonProps) => {
    return (
        <button className={`w-fit px-4 py-2 text-sm rounded text-white bg-${color}-700`} onClick={onClick}>
            {children}
        </button>
    );
};
