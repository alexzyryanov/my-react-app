import Genre from "./genre";
import { connect } from "react-redux";
import React from "react";
import { addGenre, genreLoaderOff } from "../../redux/genre_reduser";
import { request } from  "../../api/api"


let contentParam = (state) => {
    return {
        genres: state.genres.genres,
        loader: state.genres.genreLoader
    }
}


class PreGenre extends React.Component {

    async componentDidMount()  {                
        this.props.addGenre(await request("https://api.spotify.com/v1/recommendations/available-genre-seeds"))
        this.props.genreLoaderOff()
    }

    render() {
        if (this.props.loader) {
            return (
                <h1>Loading...</h1>
            )
        }
        return (<Genre genres={this.props.genres.genres}/>)
    }
}


const ContainerGenre = connect(contentParam, {addGenre, genreLoaderOff})(PreGenre)


export default ContainerGenre;