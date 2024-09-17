import { useLoaderData } from "react-router-dom"
import { Link } from "react-router-dom"
import { getPost } from "../../../api/posts"

function Post() {
    const post = useLoaderData()

    return (
        <div className="container">
            <h1 className="page-title">{post.title}</h1>
            <span className="page-subtitle">
                By: <Link to=""></Link>
            </span>
            <div>{post.body}</div>
        </div>
    )
}

function loader({ request: { signal }, params }) {
    return getPost(params.postId, { signal })
}

export const postRoute = {
    loader,
    element: <Post />
}