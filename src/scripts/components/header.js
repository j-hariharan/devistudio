/**
 * 
 * 
 * 
 * Header class:
 * -------------
 * 
 * 
 * props = {
 *  
 * 
 *  logo: String,                   // source of the logo image
 *                                  // relative to the html document where component is rendered
 *                                  // to be placed in the left
 *                                  // *default - none
 * 
 *  navElements: Array[String],     // contains the text to be displyed in the nav
 *                                  // each of these is a link
 *                                  // *default - none
 * 
 *  navLinks: Array[String],        // href of the link for each nav element
 *                                  // taken respective to the navElements
 *                                  // *default - "#"
 * 
 * }
 * 
 * 
 * 
 * 
 * 
 * 
 */




/* export default class Header extends React.Component {


    constructor (props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
        this.state = { open: false }
    }
    render () {

        if (this.props.navElements && !this.props.mobile) {
            this.links = this.props.navElements.map((e,i) => (
                <a href = {(this.props.navLinks && this.props.navLinks[i]) || "#"} style = {{
                    color: "inherit",
                    fontWeight: "bold",
                    fontSize: "100%",
                    textDecoration: "none",
                }} key = {this.props.navElements[i].toString()}>
                    {this.props.navElements[i]}
                </a>
            ))

            this.body = (
                <div style = {{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }} >
    
                    <img src = {this.props.logo} style = {{
                        height: "75%",
                        marginLeft: "40px"
                    }} />
    
                    
                    <span style = {{
                        width: "60%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                    }}>
                        {this.links}
                    </span>
                    
                </div>
            )
        }

        else if (this.props.navElements) {

            this.links = this.props.navElements.map((e,i) => {
                <a href = {(this.props.navLinks && this.props.navLinks[i]) || "#"} style = {{
                    color: "inherit",
                    fontWeight: "bold",
                    fontSize: "100%",
                    textDecoration: "none",
                    width: "100%",
                    height: "20%"
                }} key = {this.props.navElements[i].toString()}>
                    {this.props.navElements[i]}
                </a>
            })

            this.body = (

                <div style = {{
                    width: "100%",
                    height: this.state.open ? "500%" : "100%",
                    overflow: "hidden"
                }}>
                    <div style = {{
                        height: this.state.open ? "20%" :"100%",
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }} >

                        <img src = {this.props.logo} style = {{
                            height: "75%",
                            marginLeft: "20px"
                        }} />

                        <img src = {this.props.ham} style = {{
                            height: "60%",
                            marginRight: "20px"
                        }}  onClick = {this.handleClick} />
                    </div>

                    <div style = {{
                        display: "block",
                        flexDirection: "column",
                        width: "200px",
                        height: "80%"
                    }}>
                        {this.links}
                    </div>
                </div>
            )
        }


        return this.body
    }


    handleClick () {
        this.setState( {open: !this.state.open} )
    }
} */


export default class Header extends React.Component {

    constructor (props) {
        super(props)

        this.state = { open: false }
        this.handleClick = this.handleClick.bind(this)

        this.ref = React.createRef()
    }

    render () {

        if (this.props.mobile) {

            this.links = this.props.navElements.map((e,i) => {
                return (
                    <a 
                        href = {this.props.navLinks[i]}
                        key = {i.toString()}
                        style = {{
                            width: "95%",
                            padding: "20px 0px",
                            margin: "0px auto",
                            fontWeight: "bold",
                            color: "inherit",
                            fontSize: "inherit",
                            textDecoration: "none",
                            display: "block",
                            borderTop: "0.5px solid #cccccc",
                            textAlign: "center"
                        }}
                    >
                        {e}
                    </a>
                )
            })

            return (
                <div style = {{
                    width: "100%",
                }}>
                    <div style = {{
                        display: "flex",
                        width: "100%",
                        height: this.props.height+"px",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        <img src = {this.props.logo} style = {{
                            height: "75%",
                            marginLeft: "25px"
                        }} />
                        <img src = {this.props.ham} style = {{
                            height: "75%",
                            marginRight: "25px"
                        }} onClick = {this.handleClick}/>
                    </div>

                    <div style = {{
                        width: "100%",
                        height: this.state.open ? this.ref.current.children[0].offsetHeight*this.props.navElements.length : "0px",
                        transition: "1s",
                        overflow: "hidden"
                    }} ref = {this.ref}>
                        {this.links}
                    </div>
                </div>
            )

        }

        else {
            this.links = this.props.navElements.map((e,i) => {
                return (
                    <a 
                        href = {this.props.navLinks[i]}
                        key = {i.toString()}
                        style = {{
                            fontWeight: "600",
                            color: "inherit",
                            fontSize: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        {e}
                    </a>
                )
            })
            
            return (
                <div style = {{width: "100%"}}>
                    <div style = {{
                        display: "flex",
                        width: "100%",
                        height: this.props.height+"px",
                        justifyContent: "space-between",
                        alignItems: "top"
                    }}
                    >
                        <img src = {this.props.logo} style = {{
                            height: "140%",
                            margin: "15px 0px 0px 25px"
                        }} />

                        <div style = {{
                            width: "60%",
                            display: "flex",
                            height: "100%",
                            justifyContent: "space-evenly",
                            alignItems: "center"
                        }}>
                            {this.links}
                        </div>
                    </div>
                </div>
            )
        }
        
        
    }

    handleClick () {
        this.setState({ open: !this.state.open })
    }
}