import { useLoaderData } from "react-router-dom"
import { getUser } from "../../../api/users"
import { getPosts } from "../../../api/posts"
import { getTodos } from "../../../api/todos"
import PostItem from "../../Posts/PostItem"
import TodoItem from "../../Todos/TodoItem"

function User() {
    const { user, posts, todos } = useLoaderData()

    return (
        <>
            <h1 className="page-title">{user.name}</h1>
            <div className="page-subtitle">{user.email}</div>
            <div><b>Company:</b> {user.company.name}</div>
            <div><b>Website:</b> {user.website}</div>
            <div><b>Address:</b> {user.address.street} {user.address.suite}, {user.address.city}, {user.address.zipcode}</div>
            <h3 className="mt-4 mb-2">Posts</h3>
            <div className="card-grid">
                {posts.map((post) => (
                    <PostItem key={post.id} {...post} />
                ))}
            </div>
            <h3 className="mt-4 mb-2">Todos</h3>
            <ul>
                {todos.map((todo) => (
                    <TodoItem id={todo.id} {...todo} />
                ))}
            </ul>
        </>
    )
}

async function loader({ request: { signal }, params: { userId } }) {
    const user = getUser(userId, { signal })
    const posts = getPosts({ signal, params: { userId } })
    const todos = getTodos({ signal, params: { userId } })

    return {
        user: await user,
        posts: await posts,
        todos: await todos
    }
}

export const userRoute = {
    loader,
    element: <User />
}