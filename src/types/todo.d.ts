export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
export interface AddTodoContext {
  previousTodos: Todo[];
}