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