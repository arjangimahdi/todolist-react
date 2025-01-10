import List from "./components/List";
import Form from "./components/Form";
import Dialog from "./components/Dialog";
import ListItem from "./components/ListItem";
import { initDB, Stores } from "./database/db";
import { useEffect, useReducer, useState } from "react";
import type { TaskItem } from "./types/task";
import { getAll, updateRow, deleteRow } from "./database/repository";

function App() {
    const [tasks, dispatch] = useReducer(taskReducer, []);
    const [isDBReady, setIsDBReady] = useState<boolean>(false);
    const [showDialog, setShowDialog] = useState<boolean>(false);

    useEffect(() => {
        const initDatabase = async () => {
            try {
                const status = await initDB();
                setIsDBReady(status);
            } catch (error) {
                console.error("Failed to initialize the database", error);
                setIsDBReady(false);
            }
        };

        initDatabase();
    }, []);

    useEffect(() => {
        if (isDBReady) {
            const getAllTasks = async () => {
                const data = await getAll(Stores.Tasks);
                dispatch({ type: "initialize", payload: data as TaskItem[] });
            };

            getAllTasks();
        }
    }, [isDBReady]);

    function setNewTask(todo: TaskItem) {
        setShowDialog(false);
        dispatch({ type: "add", payload: todo });
    }
    async function updateTask(task: TaskItem) {
        const row: TaskItem = { ...task, date: new Date() };
        await updateRow(Stores.Tasks, row);
        dispatch({ type: "update", payload: row });
    }
    async function deleteTask(id: string) {
        await deleteRow(Stores.Tasks, id as string);
        dispatch({ type: "delete", payload: id });
    }

    if (!isDBReady) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-lg font-medium text-gray-700">Loading database...</p>
            </div>
        );
    }

    return (
        <>
            <div className="flex flex-col max-w-xl mx-auto gap-y-6 py-6">
                <button
                    onClick={() => setShowDialog(true)}
                    className="px-3 py-2 bg-blue-700 text-white rounded-md text-sm"
                >
                    Create New Task
                </button>
                <div className="bg-slate-50 rounded-lg p-4">
                    <h1 className="text-xl font-bold text-slate-900 mb-4">Recent tasks</h1>
                    <List tasks={tasks}>
                        <ListItem onUpdate={updateTask} onDelete={deleteTask} />
                    </List>
                </div>
            </div>
            <Dialog title={"Create New Task"} isOpen={showDialog} onClose={() => setShowDialog(false)}>
                <Form onAddNewTask={setNewTask} />
            </Dialog>
        </>
    );
}

function taskReducer(state: TaskItem[], action: { type: string; payload: any }) {
    switch (action.type) {
        case "initialize":
            return action.payload;
        case "add":
            return [...state, action.payload];
        case "delete":
            const mapped = state.filter(({ id }) => id !== action.payload);
            return [...mapped];
        case "update":
            const foundIndex = state.findIndex(({ id }) => action.payload.id === id);
            state[foundIndex] = action.payload;
            return [...state];
        default:
            return state;
    }
}

export default App;
