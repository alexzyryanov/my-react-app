import React from "react";
import { connect } from "react-redux";
import { addCategorie, categorieLoaderOn, categorieLoaderOff, categorieMinus, categoriePlus } from "../../redux/categorie_reduser";
import Categorie from "./categorie";
import { request } from  "../../api/api"
import Preloader from "../preloader/preloader";


let contentParam = (state) => {
    return {
        categories: state.categories.categories,
        loader: state.categories.categorieLoader,
        offset: state.categories.categorieOffset
    }
}


class PreCategorie extends React.Component {

    constructor(props) {
        super(props);
        this.buttonNextPage = this.buttonNextPage.bind(this)
        this.buttonPreviousPage = this.buttonPreviousPage.bind(this)
    }


    async componentDidMount()  {
        let offset = this.props.offset
        this.props.addCategorie(await request(
            `https://api.spotify.com/v1/browse/categories?country=RU&locale=ru_ru&offset=${offset}&limit=20`))
        this.props.categorieLoaderOff()
    }

    async buttonNextPage(value) {
        this.props.categorieLoaderOn()
        this.props.categoriePlus(this.props.categories.categories.offset + 20)
        this.props.addCategorie(await request(value))
        this.props.categorieLoaderOff()
    }

    async buttonPreviousPage(value) {
        this.props.categorieLoaderOn()
        this.props.categorieMinus(this.props.categories.categories.offset - 20)
        this.props.addCategorie(await request(value))
        this.props.categorieLoaderOff()
    }


    render() {
        if (this.props.loader) {
            return (
                <Preloader/>
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


const ContainerCategorie = connect(contentParam, {
    addCategorie, 
    categorieLoaderOn, 
    categorieLoaderOff,
    categorieMinus, 
    categoriePlus})(PreCategorie)


export default ContainerCategorie;