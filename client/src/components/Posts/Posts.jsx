import { Link, useLoaderData } from "react-router-dom"
import { getPosts } from "../../api/posts"

function Posts() {
    return (
        <div className="container">
            <h1 className="page-title">Posts</h1>
            <PostCard />
        </div>
    )
}

function PostCard() {
    const posts = useLoaderData()

    return (
        <div className="card-grid">
            {posts.map((post) => (
                <div key={post.id} className="card">
                    <div className="card-header">{post.title}</div>
                    <div className="card-body">
                        <div className="card-preview-text">{post.body}</div>
                    </div>
                    <div className="card-footer">
                        <Link className="btn" to={`/posts/${post.id}`}>View</Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

function loader({ request: { signal } }) {
    return getPosts({ signal })
}

export const postsRoute = {
    loader,
    element: <Posts />,
}