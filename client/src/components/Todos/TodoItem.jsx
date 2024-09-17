export default function TodoItem({ completed, title }) {
    return (
        <li className={completed === true ? "strike-through" : ""}>
            {title}
        </li>
    )
}