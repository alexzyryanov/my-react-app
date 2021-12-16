import React from "react";
import { connect } from "react-redux";
import { addCategorie, categorieLoaderOn, categorieLoaderOff } from "../../redux/categorie_reduser";
import Categorie from "./categorie";
import { request } from  "../../api/api"


let contentParam = (state) => {
    return {
        categories: state.categories.categories,
        loader: state.categories.categorieLoader
    }
}


class PreCategorie extends React.Component {

    constructor(props) {
        super(props);
        this.buttonNextPage = this.buttonNextPage.bind(this)
        this.buttonPreviousPage = this.buttonPreviousPage.bind(this)
    }


    async componentDidMount()  {  
        this.props.addCategorie(await request("https://api.spotify.com/v1/browse/categories"))
        this.props.categorieLoaderOff()
    }

    async buttonNextPage(value) {
        this.props.categorieLoaderOn()
        this.props.addCategorie(await request(value))
        this.props.categorieLoaderOff()
    }

    async buttonPreviousPage(value) {
        this.props.categorieLoaderOn()
        this.props.addCategorie(await request(value))
        this.props.categorieLoaderOff()
    }


    render() {
        if (this.props.loader) {
            return (
                <h1>Loading...</h1>
            )
        }
        return (
            <Categorie 
            categories={this.props.categories.categories} 
            buttonNextPage={this.buttonNextPage}
            buttonPreviousPage={this.buttonPreviousPage}/>
        )
    }
}


const ContainerCategorie = connect(contentParam, {addCategorie, categorieLoaderOn, categorieLoaderOff})(PreCategorie)


export default ContainerCategorie;