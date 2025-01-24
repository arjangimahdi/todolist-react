interface Expense {
    readonly id: number;
    description: string;
    amount: number;
    category: string;
}
interface Props {
    expenses: Expense[];
    onDelete: (id: number) => void;
}

export const ExpensesList = ({ expenses, onDelete }: Props) => {
    if (expenses.length === 0) return null;
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-200 bg-white text-sm">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left font-bold text-gray-700">
                            Description
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-bold text-gray-700">Amount</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-bold text-gray-700">Category</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-bold text-gray-700"></th>
                    </tr>
                </thead>

                <tbody>
                    {expenses.map((expense) => {
                        return (
                            <tr className="hover:bg-gray-50" key={expense.id}>
                                <td className="border border-gray-300 text-xs px-4 py-2">{expense.description}</td>
                                <td className="border border-gray-300 text-xs px-4 py-2">{expense.amount}</td>
                                <td className="border border-gray-300 text-xs px-4 py-2">{expense.category}</td>
                                <td className="border border-gray-300 text-xs px-4 py-2">
                                    <button
                                        className="px-4 py-2 bg-red-600 text-white font-medium text-sm rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                        onClick={() => onDelete(expense.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>

                <tfoot>
                    <tr className="bg-gray-100">
                        <td className="border border-gray-300 px-4 py-2 font-bold text-gray-700">Total</td>
                        <td className="border border-gray-300 px-4 py-2 font-bold text-gray-700">
                            $ {expenses.reduce((acc, expense) => expense.amount + acc, 0).toFixed(2)}
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};
