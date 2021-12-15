import React from "react";
import { connect } from "react-redux";
import Release from "./release";
import { addRelease } from "../../redux/release_reduser";
import { request } from  "../../api/api"


let contentParam = (state) => {
    return {
        releases: state.releases.releases
    }
}


class PreRelease extends React.Component {

    async componentDidMount()  {                
        this.props.addRelease(await request("browse/new-releases"))
    }

    render() {
        return (<Release {...this.props}/>)
    }
}


const ContainerRelease = connect(contentParam, {addRelease})(PreRelease)


export default ContainerRelease;