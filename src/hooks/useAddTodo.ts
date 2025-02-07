import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddTodoContext, Todo } from "../types/todo";
import { CACHE_KEY } from "../constants/todo";
import ApiClient from "../services/apiClient";

const useAddTodo = (onAddTodo: () => void) => {
    const { post } = new ApiClient<Todo>('/todos')
  const queryClient = useQueryClient();

  const { error, isLoading, mutate } = useMutation<Todo, Error, Todo, AddTodoContext>({
        mutationFn: (todo: Todo) => post(todo),
        onMutate: (newTodo) => {
            const previousTodos = queryClient.getQueryData(CACHE_KEY);

            queryClient.setQueryData<Todo[]>(CACHE_KEY, (todos = []) => [newTodo, ...todos]);

            return { previousTodos };
        },
        onSuccess: (savedTodo, newTodo) => {
            queryClient.setQueryData<Todo[]>(CACHE_KEY, (todos) =>
                todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
            );

            onAddTodo()
        },
        onError: (error, newTodo, context) => {
            if (!context) return;

            queryClient.setQueryData<Todo[]>(CACHE_KEY, context.previousTodos);
        },
    });

    return {
      error, isLoading, mutate
    }
}

export default useAddTodo