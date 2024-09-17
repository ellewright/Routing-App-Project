import { useLoaderData } from "react-router-dom"
import { getTodos } from "../../api/todos"

function Todos() {
    return (
        <div className="container">
            <h1 className="page-title">Todos</h1>
            <TodoCard />
        </div>
    )
}

function TodoCard() {
    const todos = useLoaderData()

    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id} className={todo.completed === true ? "strike-through" : ""}>
                    {todo.title}
                </li>
            ))}
        </ul>
    )
}

function loader({ request: { signal } }) {
    return getTodos({ signal })
}

export const todosRoute = {
    loader,
    element: <Todos />
}