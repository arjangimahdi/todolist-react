import Form from "./Form";
import Dialog from "./Dialog";
import { useState } from "react";
import { Stores } from "../database/db";
import { findById } from "../database/repository";
import { BsPencil, BsTrash } from "react-icons/bs";
import type { TaskItem } from "../types/task";

interface TaskItemProps {
    task: TaskItem;
    onUpdate: (task: TaskItem) => void;
    onDelete: (id: string) => void;
}

const ListItem: React.FC<TaskItemProps> = ({ task, onDelete, onUpdate }) => {
    const [showDialog, setShowDialog] = useState<boolean>(false);
    const [foundTask, setFoundTask] = useState<TaskItem>(task);

    const findTaskHandler = async (id: string) => {
        const task = await findById(Stores.Tasks, id);
        setShowDialog(true);
        setFoundTask(task as TaskItem);
    };

    const updateTaskHandler = (task: TaskItem) => {
        setShowDialog(false);
        onUpdate(task);
    };

    return (
        <>
            <li className="w-full flex flex-row justify-between items-center px-2 py-1 bg-slate-100 text-slate-900 text-sm rounded-md">
                <div className="flex flex-row gap-x-2 items-center">
                    <span className="text-xs font-bold">{task.id}</span>-<span>{task.title}</span>
                </div>
                <div className="flex flex-row gap-x-2">
                    <button
                        onClick={() => findTaskHandler(task.id)}
                        className="w-6 h-6 flex justify-center items-center"
                    >
                        <BsPencil />
                    </button>
                    <button className="w-6 h-6 flex justify-center items-center" onClick={() => onDelete(task.id)}>
                        <BsTrash />
                    </button>
                </div>
            </li>
            <Dialog title={"Update Task"} isOpen={showDialog} onClose={() => setShowDialog(false)}>
                <Form task={foundTask} isEditing={true} onUpdateTask={updateTaskHandler} />
            </Dialog>
        </>
    );
};

export default ListItem;
