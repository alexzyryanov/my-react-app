import Genre from "./genre";
import { connect } from "react-redux";
import React from "react";
import { addItemActionCreator } from "../../redux/genre_reduser";
import { request } from  "../../api/api"


let contentParam = (state) => {
    return {
        genres: state.genres.genres
    }
}


class PreGenre extends React.Component {

    async componentDidMount()  {                
        this.props.addItemActionCreator(await request("recommendations/available-genre-seeds"))
    }

    render() {
        return (<Genre {...this.props}/>)
    }
}


const ContainerGenre = connect(contentParam, {addItemActionCreator})(PreGenre)


export default ContainerGenre;