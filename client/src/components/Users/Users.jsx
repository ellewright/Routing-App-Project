import { Link, useLoaderData } from "react-router-dom"
import { getUsers } from "../../api/users"

function Users() {
    return (
        <>
            <h1 className="page-title">Users</h1>
            <UserCard />
        </>
    )
}

function UserCard() {
    const users = useLoaderData()

    return (
        <div className="card-grid">
            {users.map((user) => (
                <div key={user.id} className="card">
                    <div className="card-header">{user.name}</div>
                    <div className="card-body">
                        <div>{user.company.name}</div>
                        <div>{user.email}</div>
                        <div>{user.website}</div>
                    </div>
                    <div className="card-footer">
                        <Link className="btn" to={user.id.toString()}>View User</Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

function loader({ request: { signal } }) {
    return getUsers({ signal })
}

export const usersRoute = {
    loader,
    element: <Users />
}