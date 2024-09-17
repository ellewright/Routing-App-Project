import { Link } from "react-router-dom"
import api from "../../../../api/db.json"
import { useEffect, useState } from "react"

export default function Users() {
    return (
        <div className="container">
            <h1 className="page-title">Users</h1>
            <UserCard />
        </div>
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
        <div className="card-grid">
            {users.length > 0 ? (
                users.map((user) => (
                    <div key={user.id} className="card">
                        <div className="card-header">{user.name}</div>
                        <div className="card-body">
                            <div>{user.company.name}</div>
                            <div>{user.email}</div>
                            <div>{user.website}</div>
                        </div>
                        <div className="card-footer">
                            <Link className="btn" to={`/users/${user.id}`}>View User</Link>
                        </div>
                    </div>
                ))
            ) : (
                <p>Loading users...</p>
            )}
        </div>
    )
}