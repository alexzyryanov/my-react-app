import Genre from "./genre";
import { connect } from "react-redux";
import React from "react";
import { addGenre } from "../../redux/genre_reduser";
import { request } from  "../../api/api"


let contentParam = (state) => {
    return {
        genres: state.genres.genres
    }
}


class PreGenre extends React.Component {

    async componentDidMount()  {                
        this.props.addGenre(await request("recommendations/available-genre-seeds"))
    }

    render() {
        return (<Genre {...this.props}/>)
    }
}


const ContainerGenre = connect(contentParam, {addGenre})(PreGenre)


export default ContainerGenre;