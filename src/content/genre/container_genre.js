import Genre from "./genre";
import { connect } from "react-redux";


let contentParam = (state) => {
    return {
        genres: state.genres.genres
    }
}


const ContainerGenre = connect(contentParam)(Genre)


export default ContainerGenre;