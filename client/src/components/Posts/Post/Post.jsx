import { useLoaderData } from "react-router-dom"
import { Link } from "react-router-dom"
import { getPost } from "../../../api/posts"
import { getComments } from "../../../api/comments"
import { getUser } from "../../../api/users"

function Post() {
    const { post, user, comments } = useLoaderData()

    return (
        <>
            <h1 className="page-title">
                {post.title}
                <div className="title-btns">
                    <Link className="btn btn-outline" to="edit">Edit</Link>
                </div>
            </h1>
            <span className="page-subtitle">
                By: <Link to={`/users/${user.id}`}>{user.name}</Link>
            </span>
            <div>{post.body}</div>
            <h3 className="mt-4 mb-2">Comments</h3>
            <div className="card-stack">
                {comments.map((comment) => (
                    <div key={comment.id} className="card">
                        <div className="card-body">
                            <div className="text-sm mb-1">{comment.email}</div>
                            {comment.body}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

async function loader({ request: { signal }, params: { postId } }) {
    const post = await getPost(postId, { signal })
    const comments = getComments(postId, { signal })
    const user = getUser(post.userId, { signal })

    return { post, user: await user, comments: await comments }
}

export const postRoute = {
    loader,
    element: <Post />
}