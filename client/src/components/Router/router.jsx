import { createBrowserRouter, Navigate } from "react-router-dom"
import { postsRoute } from "../Posts/Posts"
import { usersRoute } from "../Users/Users"
import { todosRoute } from "../Todos/Todos"
import { NavLayout } from "../Navbar/Navbar"
import { postRoute } from "../Posts/Post/Post"
import { userRoute } from "../Users/User/User"

export const router = createBrowserRouter([
    {
        element: <NavLayout />, children: [
            {
                path: "/posts", children: [
                    { index: true, ...postsRoute },
                    { path: ":postId", ...postRoute }
                ]
            },
            {
                path: "/users", children: [
                    { index: true, ...usersRoute },
                    { path: ":userId", ...userRoute }
                ]
            },
            { path: "/todos", ...todosRoute },
            { path: "*", element: <Navigate to="/posts" /> }
        ]
    },
])