import { useState, useEffect } from "react"
import api from "../../../../api/db.json"
import "./Todos.css"

export default function Todos() {
    return (
        <>
            <h1>Todos</h1>
            <TodoCard />
        </>
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
        <div>
            {todos.length > 0 ? (
                todos.map((todo) => (
                    <div key={todo.id} className={todo.completed === true ? "completed" : ""}>
                        <h2>{todo.title}</h2>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}