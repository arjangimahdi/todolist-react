import categories from "../categories";

interface Props {
    onSelectCategory: (category: string) => void;
}

export const ExpensesFilter = ({ onSelectCategory }: Props) => {
    return (
        <select
            className="block max-w-xs px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            onChange={(event) => onSelectCategory(event.target.value)}
        >
            <option value="" selected>
                All categories
            </option>
            {categories.map((category) => {
                return (
                    <option key={category} value={category}>
                        {category}
                    </option>
                );
            })}
        </select>
    );
};
