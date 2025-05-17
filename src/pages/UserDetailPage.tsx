import { useSearchParams } from "react-router-dom";

export const UserDetailPage = () => {
    const [searchParams] = useSearchParams();
    return (
        <div>
            <h1 className="font-bold text-lg">{searchParams.get("name")}</h1>
        </div>
    );
};
