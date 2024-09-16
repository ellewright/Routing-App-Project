import { createBrowserRouter } from "react-router-dom"
import Posts from "../Posts/Posts"
import Users from "../Users/Users"
import Todos from "../Todos/Todos"
import Navbar, { NavLayout } from "../Navbar/Navbar"
import User from "../User/User"
import Post from "../Post/Post"

export const router = createBrowserRouter([
    {
        element: <NavLayout />, children: [
            {
                path: "/posts", children: [
                    { index: true, element: <Posts /> },
                    { path: ":postId", element: <Post /> }
                ]
            },
            {
                path: "/users", children: [
                    { index: true, element: <Users /> },
                    { path: ":userId", element: <User /> }
                ]
            },
            { path: "/todos", element: <Todos /> },
            { path: "*", element: <Posts /> }
        ]
    },
])