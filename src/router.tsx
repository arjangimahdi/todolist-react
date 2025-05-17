import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { UsersPage } from "./pages/UsersPage";
import { UserDetailPage } from "./pages/UserDetailPage";
import { Default } from "./layouts/Default";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Default />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "users/",
                element: <UsersPage />,
                children: [
                    {
                        path: ":id",
                        element: <UserDetailPage />,
                    },
                ],
            },
        ],
    },
]);

export default router;
