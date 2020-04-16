export default function (props) {

    let videos = props.links.map((e,i) => (
        <iframe
            className = {props.hidden ? "" : "animated zoomIn"}
            src = {props.hidden ? "" : `https://www.youtube.com/embed/${e.slice(e.indexOf("?v=")+3)}`}
            frameBorder = "0"
            allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            key = {e}
        />
    ))

    return (
        // <iframe width="560" height="315" src="https://www.youtube.com/embed/f2aocKWrPG8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <div style = {{display: props.hidden ? "none" : ""}} className = "videos">
            {videos}
        </div>
    )

}