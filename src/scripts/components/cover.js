/**
 * 
 * 
 * 
 * 
 * 
 * Cover class:
 * ------------
 * 
 * 
 * 
 * props = {
 *  images: Array[String],      // contains source attribute of image tags
 *                              // relative to the html document where component is rendered
 *                              // **required
 *  
 *  arrows: Boolean,            // whether to have left and right arrow keys or not
 *                              // *default: False
 * 
 *  dots: Boolean,              // whether to have the dots at the bottom or not
 *                              // *default: False
 * 
 *  dotsClickable: Boolean,     // if dots is True, then whether or not they should be clickable
 *                              // *default: False
 * 
 *  transitionTime: Number,     // time of transition between slides
 *                              // the transition is of changing opacity between 0 and 1
 *                              // in milliseconds
 *                              // *default: 0 (ms)
 * 
 *  slideTime: Number,          // time between transitions, time each slides stays visible
 *                              // in milliseconds
 *                              // *default: 3000 (ms)
 * }
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */





export default class Cover extends React.Component {

    constructor (props) {
        super(props)
        this.state = {current: 0}

        // bindings
    }

    render () {

        let slides = this.props.images.map((e, i) => {
            
            let position

            if (e.includes("@"))
                if (e.slice(e.indexOf("@")+1) == "r") position = "left"
                else position = "right"
            else position = "center"

            return (
                <span key = {i.toString()} style = {{
                    backgroundImage: `url(${e})`,
                    backgroundPosition: position,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    position: "absolute",
                    left: "0px",
                    top: "0px",
                    height: "100%",
                    width: "100%",
                    opacity: i==this.state.current ? 1 : 0,
                    transition: `${this.props.transitionTime || 0}ms`
                }} />
            )
        })

        return (
            <div style = {{
                width: "100%",
                height: "100%",
                position: "relative",
                top: "0px",
                bottom: "0px",
            }} >
                {slides}
            </div>
        )
    }

    componentDidMount () {
        this.timer = setInterval(_ => {
            if (this.state.current + 1 < this.props.images.length)
                this.setState({ current: this.state.current+1 })

            else 
                this.setState({ current: 0 })
        }, this.props.slideTime || 3000)
    }

}