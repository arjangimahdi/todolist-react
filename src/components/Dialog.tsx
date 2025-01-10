import { BsX } from "react-icons/bs";
import type { DialogProps } from "../types/dialog";

const Dialog: React.FC<DialogProps> = ({ isOpen, title, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={onClose}>
            <div
                className="bg-white rounded-lg shadow-lg w-full max-w-md relative"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex flex-row justify-between items-center p-4 border-b border-slate-200">
                    <h5 className="font-bold text-slate-900">{title}</h5>
                    <button className="" onClick={onClose}>
                        <BsX className="text-2xl text-slate-900" />
                    </button>
                </div>
                <div className="dialog-body p-4">{children}</div>
            </div>
        </div>
    );
};

export default Dialog;
