import AlbumCovers from './albumcovers.js'
import Nav from './nav.js'
import Youtube from './youtube.js'

export default class Work extends React.Component {
    constructor (props) {
        super(props)

        this.state = { now: 0 }

        this.categories = this.props.manifest.map(e => e.category)
        
        this.albums = []
        for (let i of this.props.manifest) {
            if (i.videos) {
                this.albums.push(i)
            }
            else {
                let thisCategory = i.albums.map((e, i) => {
                    return ({
                        title: e.album,
                        cover: e.files[0],
                        link: "./event?category="+this.state.now+"&album="+i
                    })
                })
                this.albums.push(thisCategory)
            }
        }

        this.handleClick = this.handleClick.bind(this)
    }

    render () {

        let categories = this.albums.map((e,i) => (
            e.videos ?

            (<Youtube 
                links = {[...e.links]}
                hidden = {i==this.state.now ? false : true}
                key = {i.toString()}
            />)

            :
            
            (<AlbumCovers
                albums = {[...e]}
                hidden = {i==this.state.now ? false : true}
                key = {i.toString()}
            />)
        ))
        return (
            <div>
                <Nav 
                    categories = {this.categories}
                    active = {this.state.now}
                    onClick = {this.handleClick}
                />
                {/* <AlbumCovers 
                    cover = {this.albums[this.state.now].files[0]}
                    link = {`./event.html?category=${this.now}&album=`}
                    title = {this.albums[this.state.now].album}
                /> */}

                {categories}
            </div>
        )
    }

    handleClick (i) {
        this.setState({ now: i })
    }
}