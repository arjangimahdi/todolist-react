import { useState } from "react";
import { ExpensesList } from "./expense-tracker/components/ExpensesList";
import { ExpensesForm } from "./expense-tracker/components/ExpensesForm";
import { ExpensesFilter } from "./expense-tracker/components/ExpensesFilter";

function App() {
    const [expenses, setExpenses] = useState([
        {
            id: 1,
            description: "Hello World 1",
            amount: 12,
            category: "Utilities",
        },
        {
            id: 2,
            description: "Hello World 2",
            amount: 10,
            category: "Groceries",
        },
        {
            id: 3,
            description: "Hello World 3",
            amount: 21,
            category: "Utilities",
        },
        {
            id: 4,
            description: "Hello World 4",
            amount: 2,
            category: "Entertainment",
        },
    ]);
    const [selectedCategory, setSelectedCategory] = useState("");

    const visibleExpenses = selectedCategory
        ? expenses.filter((expense) => expense.category === selectedCategory)
        : expenses;

    return (
        <div className="p-2 flex flex-col gap-y-2">
            <ExpensesForm onSubmit={(expense) => setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])} />
            <br />
            <hr />
            <br />
            <ExpensesFilter onSelectCategory={(category: string) => setSelectedCategory(category)} />
            <ExpensesList
                expenses={visibleExpenses}
                onDelete={(id: number) => setExpenses(expenses.filter((expense) => expense.id !== id))}
            />
        </div>
    );
}
export default App;
