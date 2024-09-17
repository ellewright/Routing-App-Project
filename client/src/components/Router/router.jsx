import { createBrowserRouter, Navigate, useRouteError } from "react-router-dom"
import { postsRoute } from "../Posts/Posts"
import { usersRoute } from "../Users/Users"
import { todosRoute } from "../Todos/Todos"
import { NavLayout } from "../Navbar/Navbar"
import { postRoute } from "../Posts/Post/Post"
import { userRoute } from "../Users/User/User"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <NavLayout />,
        children: [
            {
                errorElement: <ErrorPage />,
                children: [
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
                    { path: "*", element: <h1>404 - Page not found</h1> }
                ]
            },
        ]
    },
])

function ErrorPage() {
    const error = useRouteError()

    return (
        <>
            <h1>Error: Something went wrong!</h1>
            {import.meta.env.MODE != "production" && (
                <>
                    <pre>{error.message}</pre>
                    <pre>{error.stack}</pre>
                </>
            )}
        </>
    )
}