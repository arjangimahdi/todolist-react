import { Link, Outlet } from "react-router-dom";

export const Default = () => {
    return (
        <>
            <nav className="bg-gray-50 dark:bg-gray-700">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                            <li>
                                <Link
                                    to="/"
                                    className="text-gray-900 dark:text-white hover:underline"
                                    aria-current="page"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/users" className="text-gray-900 dark:text-white hover:underline">
                                    Users
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div id="main">
                <Outlet />
            </div>
        </>
    );
};
