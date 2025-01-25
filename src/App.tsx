import useUsers from "./hooks/useUsers";
import { AxiosError } from "./services/api-client";
import userService from "./services/user-service";

interface User {
    id: number;
    name: string;
}

function App() {
    const { error, setError, users, setUsers } = useUsers();

    const deleteUser = (id: number) => {
        const originalUsers = [...users];
        setUsers(users.filter((u) => u.id !== id));

        userService.delete(id).catch((error: AxiosError) => {
            setError(error.message);
            setUsers(originalUsers);
        });
    };

    const addUser = () => {
        const originalUsers = [...users];
        const newUser: User = {
            id: 0,
            name: "Mahdi Arjangi",
        };
        setUsers([...users, newUser]);

        userService
            .create(newUser)
            .then(({ data: savedUser }) => {
                setUsers([...users, savedUser]);
            })
            .catch((error: AxiosError) => {
                setError(error.message);
                setUsers(originalUsers);
            });
    };

    const updateUser = (user: User) => {
        const originalUsers = [...users];
        const updatedUser = { ...user, name: user.name + "!" };
        setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

        userService.update(user.id, updatedUser).catch((error: AxiosError) => {
            setError(error.message);
            setUsers(originalUsers);
        });
    };

    return (
        <div className="bg-gray-100 h-screen ">
            <div className="flex flex-col p-10 gap-y-2 w-[568px] mx-auto">
                <div className="flex flex-row justify-between align-items">
                    <h2 className="font-bold text-lg">Users</h2>
                    <button className="bg-blue-700 text-white px-3 py-2 text-xs rounded" onClick={() => addUser()}>
                        Add User
                    </button>
                </div>
                {error && <p className="text-red-600 text-xs font-bold">{error}</p>}
                <ul className="list-disc border border-gray-400 rounded">
                    {users.map((user) => {
                        return (
                            <li
                                className="flex flex-row justify-between items-center border-b border-gray-400 last:border-none p-2"
                                key={user.id}
                            >
                                <small>{user.name}</small>
                                <div className="flex flex-row-reverse gap-x-2">
                                    <button
                                        className="border border-red-600 px-3 py-2 text-xs text-red-700 hover:bg-red-100 rounded"
                                        onClick={() => deleteUser(user.id)}
                                    >
                                        Delete
                                    </button>
                                    <button
                                        className="border border-yellow-600 px-3 py-2 text-xs text-yellow-700 hover:bg-yellow-100    rounded"
                                        onClick={() => updateUser(user)}
                                    >
                                        Update
                                    </button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
export default App;
