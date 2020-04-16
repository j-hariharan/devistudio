/* {
    albums: [
        {
            cover: "src of cover image",
            title: "title",
            subTitle: "sub-title",
            link: "href link of <a>"
        }

    ],
    height: Number,
} */

export default class AlbumCovers extends React.Component {

    constructor (props) {
        super(props)
    }

    render () {
        let tiles = this.props.albums.map((e,i) => (
            <div style = {{
                backgroundImage: `url(${e.cover})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                margin: "10px",
                borderRadius: "10px",
                cursor: "pointer"
            }} key = {i.toString()} className = {this.props.hidden ? "" : "animated zoomIn"}>
                <a href = {e.link} style = {{
                    backgroundColor: "black",
                    opacity: "0.7",
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    borderRadius: "10px",
                    textDecoration: "none"
                }}>
                    <h1 style = {{
                        color: "white",
                        fontWeight: 600,
                        margin: "0px",
                        lineHeight: "1.1em"
                    }}>{e.title}</h1>
                    <h2 style = {{
                        color: "white",
                        fontWeight: 500,
                        fontSize: this.props.height > 200 ? "35px" : "25px",
                        margin: "0px",
                        lineHeight: "1.1em"
                    }}>{e.subTitle}</h2>
                </a>
            </div>
        ))

        return (
            <div style = {{
                height: "100%",
                width: "100%",
                display: this.props.hidden ? "none" : ""
            }} id = "work-albums-container">
                {tiles}
            </div>
        )
    }
}