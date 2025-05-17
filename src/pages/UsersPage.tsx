import { Link, Outlet } from "react-router-dom";

export const UsersPage = () => {
    return (
        <div>
            <h1 className="font-bold text-lg">Users</h1>
            <div className="grid grid-cols-4 gap-4">
                <ul className="w-48 text-sm font-medium mt-4 text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <Link to={`/users/${1}`}>User One</Link>
                    </li>
                    <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                        <Link to={`/users/${2}`}>User Two</Link>
                    </li>
                    <li className="w-full px-4 py-2 ">
                        <Link to={`/users/${3}`}>User Three</Link>
                    </li>
                </ul>
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
