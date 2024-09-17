import { useLoaderData } from "react-router-dom"
import { getTodos } from "../../api/todos"
import TodoItem from "./TodoItem"

function Todos() {
    return (
        <>
            <h1 className="page-title">Todos</h1>
            <TodoCard />
        </>
    )
}

function TodoCard() {
    const todos = useLoaderData()

    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} {...todo} />
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