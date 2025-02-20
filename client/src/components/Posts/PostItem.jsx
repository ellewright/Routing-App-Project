import { Link } from "react-router-dom";

export default function PostItem({ id, title, body }) {
    return (
        <div className="card">
            <div className="card-header">{title}</div>
            <div className="card-body">
                <div className="card-preview-text">{body}</div>
            </div>
            <div className="card-footer">
                <Link className="btn" to={`/posts/${id}`}>View</Link>
            </div>
        </div>
    )
}