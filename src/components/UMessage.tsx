interface UMessageProps {
    message: string;
}

export const UMessage = ({ message }: UMessageProps) => {
    return (
        <div className="flex flex-col gap-y-2 p-2">
            <span>{message}</span>
        </div>
    );
};
