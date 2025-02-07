import { useRef } from "react";
import useAddTodo from "./../hooks/useAddTodo";

export const TodoForm = () => {
    const input = useRef<HTMLInputElement>(null);

    const clearForm = () => {
        if (input.current) input.current.value = "";
    };
    const { error, mutate } = useAddTodo(clearForm);
    const addTodo = () => {
        if (input.current && input.current.value)
            mutate({
                completed: false,
                id: 0,
                title: input.current?.value,
            });
    };

    return (
        <>
            {error && (
                <div
                    className="flex items-center p-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                    role="alert"
                >
                    <svg
                        className="shrink-0 inline w-4 h-4 me-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <div>{error.message}</div>
                </div>
            )}
            <form
                className="flex items-center max-w-md"
                onSubmit={(event) => {
                    event.preventDefault();
                    addTodo();
                }}
            >
                <div className="relative w-full me-4">
                    <input
                        type="text"
                        id="simple-search"
                        className="bg-gray-50 me-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter todo title"
                        required
                        ref={input}
                    />
                </div>
                <button
                    type="submit"
                    className="p-2.5 text-sm font-medium whitespace-nowrap text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Add Todo
                </button>
            </form>
        </>
    );
};
