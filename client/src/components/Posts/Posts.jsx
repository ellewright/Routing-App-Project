import { Link } from "react-router-dom"
import api from "../../../../api/db.json"
import { useEffect, useState } from "react"
// import "./Posts.css"

export default function Posts() {
    return (
        <div className="container">
            <h1 className="page-title">Posts</h1>
            <PostCard />
        </div>
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
        <div className="card-grid">
            {posts.length > 0 ? (
                posts.map((post) => (
                    <div key={post.id} className="card">
                        <div className="card-header">{post.title}</div>
                        <div className="card-body">
                            <div className="card-preview-text">{post.body}</div>
                        </div>
                        <div className="card-footer">
                            <Link className="btn" to={`/posts/${post.id}`}>Read More</Link>
                        </div>
                    </div>
                ))
            ) : (
                <p>Loading posts...</p>
            )}
        </div>
    )
}