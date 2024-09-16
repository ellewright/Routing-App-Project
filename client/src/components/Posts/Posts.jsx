import { Link } from "react-router-dom"
import api from "../../../../api/db.json"
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
    const [data, setData] = useState({})

    useEffect(() => {
        setData(api)
    }, [])

    const posts = data?.posts || []
    console.log(posts)

    return (
        <div>
            {posts.length > 0 ? (
                posts.map((post) => (
                    <div key={post.id} className="post-card">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <Link to={`/posts/${post.id}`}>Read More</Link>
                    </div>
                ))
            ) : (
                <p>Loading posts...</p>
            )}
        </div>
    )
}