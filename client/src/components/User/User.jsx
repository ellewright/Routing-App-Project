import { useParams } from "react-router-dom"
import api from "../../../../api/db.json"

export default function User() {

    const { userId } = useParams()
    const user = api.users.find(user => user.id === parseInt(userId))

    if (!user) {
        return <p>User not found</p>;
    }

    return (
        <>
            <h2>{user.name}</h2>
            <p>{user.company.name}</p>
            <p>{user.email}</p>
            <p>{user.website}</p>
            <p>{user.address.street} {user.address.suite}</p>
            <p>{user.address.city}, {user.address.zipcode}</p>
        </>
    )
}