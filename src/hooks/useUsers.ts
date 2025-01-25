import { useEffect, useState } from "react";
import userService, { User } from "../services/user-service";
import { AxiosError, CanceledError } from "axios";

const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const { request, cancel } = userService.getAll();

        request
            .then(({ data }) => {
                setUsers(data as User[]);
            })
            .catch((error: AxiosError) => {
                if (error instanceof CanceledError) return;
                setError(error.message);
            });

        return () => cancel();
    }, []);

    return {
      users, setUsers,
      error, setError
    }
};

export default useUsers;
