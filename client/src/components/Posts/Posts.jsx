import { Link } from "react-router-dom"
import data from "../../../../api/db.json"
import { useEffect, useState } from "react"

export default function Posts() {
    return (
        <>
            <h1>Posts</h1>
            <PostCard />
        </>
    )
}

function PostCard() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        setPosts(data)
    }, [])

    return (
        <>
            {/* posts will be rendered here */}
        </>
    )
}