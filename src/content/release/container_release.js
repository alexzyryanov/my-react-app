import React from "react";
import { connect } from "react-redux";
import Release from "./release";
import { addRelease, releaseLoaderOn, releaseLoaderOff, offsetPlus, offsetMinus } from "../../redux/release_reduser";
import { request } from  "../../api/api"


let contentParam = (state) => {
    return {
        releases: state.releases.releases,
        loader: state.releases.releaseLoader,
        offset: state.releases.offset
    }
}


class PreRelease extends React.Component {

    constructor(props) {
        super(props);
        this.buttonNextPage = this.buttonNextPage.bind(this)
        this.buttonPreviousPage = this.buttonPreviousPage.bind(this)
    }

    async componentDidMount()  {
        let offset = this.props.offset
        this.props.addRelease(await request(
            `https://api.spotify.com/v1/browse/new-releases?locale=ru&offset=${offset}&limit=20`
            ))
        this.props.releaseLoaderOff()
    }

    async buttonNextPage(value) {
        this.props.releaseLoaderOn()
        this.props.offsetPlus(this.props.releases.albums.offset + 20)
        this.props.addRelease(await request(value))
        this.props.releaseLoaderOff()
    }

    async buttonPreviousPage(value) {
        this.props.releaseLoaderOn()
        this.props.offsetMinus(this.props.releases.albums.offset - 20)
        this.props.addRelease(await request(value))
        this.props.releaseLoaderOff()
    }

    render() {
        if (this.props.loader) {
            return (
                <h1>Loading...</h1>
            )
        }
        return (
            <Release 
            releases={this.props.releases} 
            buttonNextPage={this.buttonNextPage}
            buttonPreviousPage={this.buttonPreviousPage}/>
        )
    }
}


const ContainerRelease = connect(contentParam, {
    addRelease, 
    releaseLoaderOn, 
    releaseLoaderOff, 
    offsetPlus,
    offsetMinus
})(PreRelease)


export default ContainerRelease;