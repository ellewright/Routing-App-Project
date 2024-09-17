import { useParams } from "react-router-dom"
import api from "../../../../api/db.json"
import { Link } from "react-router-dom"

export default function Post() {

    const { postId } = useParams()
    const post = api.posts.find(post => post.id === parseInt(postId))

    if (!post) {
        return <p>Post not found</p>;
    }

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