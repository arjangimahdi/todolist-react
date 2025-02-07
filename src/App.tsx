import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

function App() {
    return (
        <div className="p-4 flex flex-col gap-y-4 bg-slate-950">
            <TodoForm />
            <TodoList />
        </div>
    );
}
export default App;
