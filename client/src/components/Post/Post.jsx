import { useParams } from "react-router-dom"
import api from "../../../../api/db.json"

export default function Post() {

    const { postId } = useParams()
    const post = api.posts.find(post => post.id === parseInt(postId))

    if (!post) {
        return <p>Post not found</p>;
    }

    return (
        <>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </>
    )
}