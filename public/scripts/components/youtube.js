export default function (props) {

    var videos = props.links.map(function (e, i) {
        return React.createElement("iframe", {
            className: props.hidden ? "" : "animated zoomIn",
            src: "https://www.youtube.com/embed/" + e.slice(e.indexOf("?v=") + 3),
            frameBorder: "0",
            allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: true,
            key: e
        });
    });

    return (
        // <iframe width="560" height="315" src="https://www.youtube.com/embed/f2aocKWrPG8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        React.createElement(
            "div",
            { style: { display: props.hidden ? "none" : "block" }, className: "videos" },
            videos
        )
    );
}