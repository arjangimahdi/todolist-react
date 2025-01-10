import { Stores } from "../database/db";
import React, { useState } from "react";
import type { TaskItem } from "../types/task";
import { insertRow } from "../database/repository";
import { generateUniqueId } from "../utils/UniqueId";

interface TodoForm {
    task?: TaskItem;
    isEditing?: boolean;
    onAddNewTask?: (row: TaskItem) => void;
    onUpdateTask?: (row: TaskItem) => void;
}

const Form: React.FC<TodoForm> = ({ task, isEditing, onAddNewTask, onUpdateTask }) => {
    const [title, setTitle] = useState<string>(task?.title as string);

    const addNewTask = async (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data: TaskItem = { id: generateUniqueId(), isChecked: false, date: new Date(), title: title };

        try {
            insertRow(Stores.Tasks, data).then(() => {
                onAddNewTask(data);
                setTitle("");
            });
        } catch (err: unknown) {
            if (err instanceof Error) {
                console.error(err.message);
            } else {
                console.error("Something went wrong");
            }
        }
    };

    const updateTask = async (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();

        const updatedTask: TaskItem = {
            ...task,
            title: title,
        };

        onUpdateTask(updatedTask);
    };

    return (
        <form className="flex flex-col items-start gap-y-2" onSubmit={isEditing ? updateTask : addNewTask}>
            <input
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter task title"
                className="px-2 py-1 w-full rounded-md text-sm border border-slate-400"
            />
            <button type="submit" className="px-2 py-1 bg-blue-700 text-white rounded-md text-sm">
                {isEditing ? "Update" : "Create"}
            </button>
        </form>
    );
};

export default Form;
