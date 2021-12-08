import Favorite from "./favorite";
import { connect } from "react-redux";


let contentParam = (state) => {
    return {
        sounds: state.sounds.sounds
    }
}


const ContainerFavorite = connect(contentParam)(Favorite)


export default ContainerFavorite;