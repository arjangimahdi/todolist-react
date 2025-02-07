import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Todo } from "../types/todo";
import { CACHE_KEY } from "../constants/todo";
import ApiClient from "../services/apiClient";

const { getAll } = new ApiClient<Todo>('/todos');

const useTodos = () => {
return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY,
    queryFn: getAll,
    keepPreviousData: true
});
}

export default useTodos