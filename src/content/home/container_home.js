import { connect } from "react-redux";
import Home from "./home";


let contentParam = (state) => {
    return {
        other: state.other.other
    }
}


const ContainerHome = connect(contentParam)(Home)


export default ContainerHome;