import { Link, useLoaderData } from "react-router-dom"
import { getPosts } from "../../api/posts"
import PostItem from "./PostItem"

function Posts() {
    return (
        <>
            <h1 className="page-title">Posts</h1>
            <PostCard />
        </>
    )
}

function PostCard() {
    const posts = useLoaderData()

    return (
        <div className="card-grid">
            {posts.map((post) => (
                <PostItem key={post.id} {...post} />
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