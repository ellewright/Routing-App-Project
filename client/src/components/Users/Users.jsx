import { Link } from "react-router-dom"
import api from "../../../../api/db.json"
import { useEffect, useState } from "react"

export default function Users() {
    return (
        <>
            <h1>Users</h1>
            <UserCard />
        </>
    )
}

function UserCard() {
    const [data, setData] = useState({})

    useEffect(() => {
        setData(api)
    }, [])

    const users = data?.users || []
    console.log(users)

    return (
        <div>
            {users.length > 0 ? (
                users.map((user) => (
                    <div key={user.id} className="user-card">
                        <h2>{user.name}</h2>
                        <p>{user.company.name}</p>
                        <p>{user.email}</p>
                        <p>{user.website}</p>
                        <Link to={`/users/${user.id}`}>View User</Link>
                    </div>
                ))
            ) : (
                <p>Loading users...</p>
            )}
        </div>
    )
}