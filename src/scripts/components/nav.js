export default function Nav (props) {

    let nav = props.categories.map((e,i) => (
        <span key = {i.toString()} id = {i==props.active ? "work-nav-active" : ""} onClick = {_ => props.onClick(i)}>
            {e}
        </span>
    ))

    return (
        <div id = "work-nav">
            {nav}
        </div>
    )


}