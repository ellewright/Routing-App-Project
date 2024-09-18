import { Form, Link, useLoaderData } from "react-router-dom"
import { getPosts } from "../../api/posts"
import { getUsers } from "../../api/users"
import PostItem from "./PostItem"
import { useEffect, useRef } from "react"
import FormGroup from "./NewPost/FormGroup"

function Posts() {

    return (
        <>
            <h1 className="page-title">
                Posts
                <div className="title-btns">
                    <Link className="btn btn-outline" to="new">New</Link>
                </div>
            </h1>
            <PostCard />
        </>
    )
}

function PostCard() {
    const queryRef = useRef()
    const userIdRef = useRef()

    const { posts, users, searchParams: { query, userId } } = useLoaderData()

    useEffect(() => {
        queryRef.current.value = query || ""
    }, [query])

    useEffect(() => {
        userIdRef.current.value = userId || ""
    }, [userId])

    return (
        <>
            <Form className="form mb-4">
                <div className="form-row">
                    <FormGroup>
                        <label htmlFor="query">Query</label>
                        <input type="search" name="query" id="query" ref={queryRef} />
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="userId">Author</label>
                        <select type="search" name="userId" id="userId" ref={userIdRef}>
                            <option value="">Any</option>
                            {users.map((user) => (
                                <option key={user.id} value={user.id}>{user.name}</option>
                            ))}
                        </select>
                    </FormGroup>
                    <button className="btn">Filter</button>
                </div>
            </Form>
            <div className="card-grid">
                {posts.map((post) => (
                    <PostItem key={post.id} {...post} />
                ))}
            </div>
        </>
    )
}

async function loader({ request: { signal, url } }) {
    const searchParams = new URL(url).searchParams
    const query = searchParams.get("query")
    const userId = searchParams.get("userId")
    const filterParams = { q: query }
    if (userId !== "") filterParams.userId = userId
    const posts = getPosts({ signal, params: filterParams })
    const users = getUsers({ signal })

    return {
        posts: await posts,
        users: await users,
        searchParams: { query, userId },
    }
}

export const postsRoute = {
    loader,
    element: <Posts />,
}