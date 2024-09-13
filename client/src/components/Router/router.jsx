import { createBrowserRouter } from "react-router-dom"
import Posts from "../Posts/Posts"
import Users from "../Users/Users"
import Todos from "../Todos/Todos"
import Navbar, { NavLayout } from "../Navbar/Navbar"

export const router = createBrowserRouter([
    {
        element: <NavLayout />, children: [
            { path: "*", element: <Posts /> },
            { path: "/posts", element: <Posts /> },
            { path: "/users", element: <Users /> },
            { path: "/todos", element: <Todos /> },
        ]
    },
])