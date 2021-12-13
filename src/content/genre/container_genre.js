import Genre from "./genre";
import { connect } from "react-redux";
import React from "react";
import { addItemActionCreator } from "../../redux/genre_reduser";


let contentParam = (state) => {
    return {
        genres: state.genres.genres,
        github: state.genres.github
    }
}


class PreGenre extends React.Component {

    componentDidMount()  {
        fetch("https://api.github.com/users/vonred5")
            .then(response => response.json())
            .then(result => {this.props.addItemActionCreator(result)})
    }

    render() {
        return (<Genre {...this.props}/>)
    }
}


const ContainerGenre = connect(contentParam, {addItemActionCreator})(PreGenre)


export default ContainerGenre;