import { Link, Outlet } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="top-nav">
            <div class="nav-text-large">My App</div>
            <ul className="nav-list">
                <li>
                    <Link to="/posts">Posts</Link>
                </li>
                <li>
                    <Link to="/users">Users</Link>
                </li>
                <li>
                    <Link to="/todos">Todos</Link>
                </li>
            </ul>
        </nav>
    )
}

export function NavLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}