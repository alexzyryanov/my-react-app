import Favorite from "./favorite";
import { connect } from "react-redux";
import React from "react";
import { request } from  "../../api/api"
import { addItemActionCreator } from "../../redux/genre_reduser";


let contentParam = (state) => {
    return {
        favorites: state.favorites.favorites
    }
}


class PreFavorite extends React.Component {

    async componentDidMount()  {                
        this.props.addItemActionCreator(await request("tracks/metal"))
    }

    render() {
        return (<Favorite {...this.props}/>)
    }
}


const ContainerFavorite = connect(contentParam, {addItemActionCreator})(PreFavorite)


export default ContainerFavorite;