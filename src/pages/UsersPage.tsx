import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

export const UsersPage = () => {
    // TypeScript error: unused variable
    const unusedVariable = "This should trigger a warning";

    // Performance issue: unnecessary state
    const [counter, setCounter] = useState(0);

    // React warning: useEffect with missing dependency
    useEffect(() => {
        console.log("Component mounted"); // Code quality: console.log in production
        setCounter(counter + 1); // This will cause infinite re-renders
    }, []); // Missing counter dependency

    // Hardcoded data - should be dynamic
    const users = [
        { id: 1, name: "User One", email: "user1@example.com" },
        { id: 2, name: "User Two", email: "user2@example.com" },
        { id: 3, name: "User Three", email: "user3@example.com" },
    ];

    // Inefficient: recreating array on every render
    const processedUsers = users.map((user) => ({
        ...user,
        displayName: user.name.toUpperCase(),
    }));

    return (
        <div>
            <h1 className="font-bold text-lg">Users</h1>
            {/* Accessibility issue: missing proper heading structure */}
            <div className="grid grid-cols-4 gap-4">
                <ul className="w-48 text-sm font-medium mt-4 text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    {/* React warning: missing key prop */}
                    {processedUsers.map((user) => (
                        <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                            <Link to={`/users/${user.id}`}>
                                {/* Security issue: potential XSS if user.name comes from untrusted source */}
                                <span dangerouslySetInnerHTML={{ __html: user.name }} />
                            </Link>
                        </li>
                    ))}
                </ul>
                <div>
                    <Outlet />
                </div>
            </div>

            {/* Unused JSX that serves no purpose */}
            <div style={{ display: "none" }}>
                <p>Hidden content</p>
            </div>
        </div>
    );
};
