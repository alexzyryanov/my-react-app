import React from "react";
import { connect } from "react-redux";
import { addCategorie } from "../../redux/categorie_reduser";
import Categorie from "./categorie";
import { request } from  "../../api/api"


let contentParam = (state) => {
    return {
        categories: state.categories.categories
    }
}


class PreCategorie extends React.Component {

    async componentDidMount()  {                
        this.props.addCategorie(await request("browse/categories"))
    }

    render() {
        return (<Categorie {...this.props}/>)
    }
}


const ContainerCategorie = connect(contentParam, {addCategorie})(PreCategorie)


export default ContainerCategorie;