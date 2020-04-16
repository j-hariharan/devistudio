/**
 * 
 * 
 * 
 * 
 * BasicGrid class:
 * ----------------
 * 
 * props = {
 *  
 *  images: Array[String],              // array containing source paths of images to be placed in grid
 *                                      // path should be relative to html document where component is rendered
 *                                      // *default - none
 *  
 *  gap: Number,                        // gap between the columns and rows of the grid
 *                                      // in px
 *                                      // *default - 0
 * 
 *  height: Number,                     // height of each row of the grid
 *                                      // in px
 *                                      // *default - 200 (px)
 * 
 *  columns: Number,                    // number of columns
 *                                      // *default - 1
 * 
 *  openable: Boolean,                  // whether or not user can click on image to enlarge it
 *                                      // *default - false
 * 
 *  openTime: Number,                   // time to enlarge the image
 *                                      // only works if openable is set to true
 *                                      // in milliseconds
 *                                      // *default - 0
 * 
 * }
 * 
 * 
 */

/* 
export default class BasicGrid extends React.Component {

    constructor (props) {
        super(props)

        this.ref = React.createRef()
    }

    render () {

        if (this.props.images) {
            this.tiles = this.props.images.map((e,i) => (
                <span 
                key = {i.toString()} 
                style = {{
                    backgroundImage: `url(${this.props.images[i]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "100%",
                    width: "100%",
                    gridColumn: `${i%(this.props.columns || 1) + 1}`,
                    gridRow: `${parseInt((i)/(this.props.columns || 1)) + 1}`,
                    cursor: this.props.openable && "pointer"
                }}
                onClick = { this.props.openable && (_ => this.handleClick(i))} />
            ))
        }

        this.columns = ""
        for(let i=0 ; i< (this.props.columns || 1) ; i++) this.columns += "1fr "
        
        return (
            <div style = {{
                width: "100%",
                display: "grid",
                gridTemplateColumns: this.columns,
                gridAutoRows: `${this.props.height || 200}px`,
                gridGap: `${this.props.gap || 0}px`
            }} ref = {this.ref}>
                {this.tiles}
            </div>
        )
    }

    handleClick (i) {

        let tile = this.ref.current.children[i]

        if (!this.opened) {
            
            let keyframes = [
                {position: "fixed", left: tile.offsetLeft-window.pageXOffset+"px" , top: tile.offsetTop-window.pageYOffset+"px", zIndex: "0", backgroundSize: "contain", height: tile.offsetHeight+"px", width: tile.offsetWidth+"px", backgroundColor: "white"},
                {position: "fixed", left: "0px", top: "0px", zIndex: "2", backgroundSize: "contain", height: "100%", width: "100%", backgroundColor: "white"}
            ]
            let timing = {
                duration: this.props.openTime || 0,
                fill: "forwards",
                iterations: 1
            }

            document.body.style.overflow = "hidden"
            document.body.style.height = "100vh"
            
            this.opened = tile.animate(keyframes, timing)
        }

        else {
            this.opened.reverse()
            this.opened = false

            document.body.style.overflow = "scroll"
            document.body.style.height = "100%"
        }
    }

}
 */


 export default class BasicGrid extends React.Component {

    constructor (props) {
        super(props)
        this.state = {open: false, prev: 0}

        this.handleClick = this.handleClick.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.moveLeft = this.moveLeft.bind(this)
        this.moveRight = this.moveRight.bind(this)
        this.keyClicked = this.keyClicked.bind(this)

    }

    render () {
        let images = this.props.images.map((e,i) => {
            return (
                <img src = {e} style = {{
                    width: "100%",
                    padding: this.props.gap/2+"px",
                    cursor: "pointer"
                }}  key = {i.toString()} onClick = {() => this.handleClick(i)}/>
            )
        })

        return (
            <div style = {{
                width: "100%",
                columnCount: this.props.columns,
                columnGap: this.props.gap+"px",
                columnFill: "balance"
            }}>
                {images}

                <div style = {{
                    position: "fixed",
                    top: "0px",
                    left: "0px",
                    width: "100vw",
                    height: "100vh",
                    transform: this.state.open !== false ? "translateY(0px)" : "translateY(-100vh)",
                    transition: "500ms",
                    zIndex: 2,
                    backgroundColor: "rgba(0,0,0,0.8)"
                }} >
                    <img src = {this.props.images[this.state.open] || this.props.images[this.state.prev]} style = {{
                        objectFit: "contain",
                        height: "100%",
                        width: "100%",
                    }}/>

                    <img src = "./images/static/icons/close.png" style = {{
                        display: this.state.open !== false ? "" : "none",
                        position: "fixed",
                        top: "20px",
                        right: "20px",
                        height: "50px",
                        cursor: "pointer"
                    }} onClick = {this.handleClose}/>

                    <span onClick = {this.moveRight} style = {{
                        color: "white",
                        fontFamily: "Arial, Helvetica, sans-serif",
                        fontWeight: 900,
                        height: "50px",
                        position: "fixed",
                        top: "48%",
                        right: "20px",
                        fontSize: "30px",
                        cursor: "pointer",
                        padding: "5px 20px",
                        borderRadius: "5px",
                        backgroundColor: "rgba(0,0,0,0.8)"
                    }}>
                        >
                    </span>

                    <span onClick = {this.moveLeft} style = {{
                        color: "white",
                        fontFamily: "Arial, Helvetica, sans-serif",
                        fontWeight: 900,
                        height: "50px",
                        position: "fixed",
                        top: "48%",
                        left: "20px",
                        fontSize: "30px",
                        cursor: "pointer",
                        userSelect: "none",
                        padding: "5px 20px",
                        borderRadius: "5px",
                        backgroundColor: "rgba(0,0,0,0.8)"
                    }}>
                        {"<"}
                    </span>
                </div>
            </div>
        )
    }

    componentDidMount () {
        document.body.addEventListener("keydown", this.keyClicked)
    }

    handleClick (i) {
        document.body.style.overflow = "hidden"
        this.setState({open: i, prev: i})
    }

    handleClose () {
        document.body.style.overflow = ""
        this.setState({open: false})
    }

    moveRight () {
        this.setState({open: this.state.open+1 < this.props.images.length ? this.state.open+1 : 0})
    }

    moveLeft () {
        this.setState({open: this.state.open > 0 ? this.state.open-1 : this.props.images.length})
    }

    keyClicked (e) {
        if (this.state.open !== false)
            if(e.key == "ArrowRight") this.moveRight()
            else if (e.key == "ArrowLeft") this.moveLeft()
    }

}