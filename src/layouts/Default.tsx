import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

export const Default = () => {
    // React warning: unused state
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // TypeScript error: implicit any
    const [user, setUser] = useState();

    // Performance issue: useEffect running on every render
    useEffect(() => {
        // Fetching user data without proper error handling
        fetch("/api/user")
            .then((response) => response.json())
            .then((data) => setUser(data))
            .catch((err) => console.error("Failed to fetch user:", err)); // Code quality: console.error
    }); // Missing dependency array

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
                            {/* Accessibility issue: missing proper list item structure */}
                            <li>
                                {/* Security issue: potential XSS */}
                                <span dangerouslySetInnerHTML={{ __html: user?.name || "Guest" }} />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Missing semantic HTML structure */}
            <div id="main">
                <Outlet />
            </div>

            {/* Unused component logic */}
            {isMenuOpen && (
                <div className="hidden">
                    <p>Menu content</p>
                </div>
            )}

            {/* Code quality: debugging code left in production */}
            {process.env.NODE_ENV === "development" && (
                <div
                    style={{
                        position: "fixed",
                        bottom: 0,
                        right: 0,
                        background: "red",
                        color: "white",
                        padding: "5px",
                    }}
                >
                    DEBUG MODE
                </div>
            )}
        </>
    );
};
