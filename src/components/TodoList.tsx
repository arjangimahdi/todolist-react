import useTodos from "../hooks/useTodos";

export const TodoList = () => {
    const { data: todos, error, isLoading } = useTodos();

    if (isLoading) return <p>isLoading...</p>;

    if (error) return <p>{error.message}</p>;

    return (
        <ul className="border border-gray-700 divide-y divide-gray-700 rounded-lg">
            {todos?.map((todo) => (
                <li className="p-4 bg-gray-800 text-white hover:bg-gray-700 transition" key={todo.id}>
                    {todo.title}
                </li>
            ))}
        </ul>
    );
};
