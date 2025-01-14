import { ReactNode } from "react";

interface UListGroupProps {
    items: string[];
}

export const UListGroup = ({ items }: UListGroupProps) => {
    if (items.length === 0) return <strong>No Items Found</strong>;
    return (
        <ul className="flex flex-col w-full border border-gray-200">
            {items.map((item, index) => {
                return (
                    <li
                        key={index}
                        className={`w-full p-2 text-sm ${index < items.length - 1 ? "border-b border-gray-200" : ""}`}
                    >
                        {item}
                    </li>
                );
            })}
        </ul>
    );
};
