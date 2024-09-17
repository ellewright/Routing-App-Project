import { useParams } from "react-router-dom"
import api from "../../../../api/db.json"
import "./User.css"

export default function User() {

    const { userId } = useParams()
    const user = api.users.find(user => user.id === parseInt(userId))

    if (!user) {
        return <p>User not found</p>;
    }

    return (
        <div class="container">
            <h1 class="page-title">{user.name}</h1>
            <div className="page-subtitle">{user.email}</div>
            <div><b>Company:</b> {user.company.name}</div>
            <div><b>Website:</b> {user.website}</div>
            <div><b>Address:</b> {user.address.street} {user.address.suite}</div>
            <div>{user.address.city}, {user.address.zipcode}</div>
        </div>
    )
}