import { useState, useEffect } from "react"
import api from "../../../../api/db.json"

export default function Todos() {
    return (
        <div className="container">
            <h1 className="page-title">Todos</h1>
            <TodoCard />
        </div>
    )
}

function TodoCard() {
    const [data, setData] = useState({})

    useEffect(() => {
        setData(api)
    }, [])

    const todos = data?.todos || []
    console.log(todos)

    return (
        <ul>
            {todos.length > 0 ? (
                todos.map((todo) => (
                    <li key={todo.id} className={todo.completed === true ? "strike-through" : ""}>
                        {todo.title}
                    </li>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </ul>
    )
}