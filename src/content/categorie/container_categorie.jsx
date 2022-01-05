import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  addCategorie, categorieLoaderOn, categorieLoaderOff, categorieMinus, categoriePlus,
} from '../../redux/categorie_reduser';
import Categorie from './categorie';
import request from '../../api/api';
import Preloader from '../preloader/preloader';

const contentParam = (state) => ({
  categories: state.categories.categories,
  loader: state.categories.categorieLoader,
  offset: state.categories.categorieOffset,
});

class PreCategorie extends React.Component {
  constructor(props) {
    super(props);
    this.buttonNextPage = this.buttonNextPage.bind(this);
    this.buttonPreviousPage = this.buttonPreviousPage.bind(this);
  }

  async componentDidMount() {
    const { offset, addCategorie: add, categorieLoaderOff: off } = this.props;
    add(await request(
      `https://api.spotify.com/v1/browse/categories?country=RU&locale=ru_ru&offset=${offset}&limit=20`,
    ));
    off();
  }

  async buttonNextPage(value) {
    const {
      categories,
      addCategorie: add,
      categorieLoaderOff: off,
      categorieLoaderOn: on,
      categoriePlus: plus,
    } = this.props;
    on();
    plus(categories.categories.offset + 20);
    add(await request(value));
    off();
  }

  async buttonPreviousPage(value) {
    const {
      categories,
      addCategorie: add,
      categorieLoaderOff: off,
      categorieLoaderOn: on,
      categorieMinus: minus,
    } = this.props;
    on();
    minus(categories.categories.offset - 20);
    add(await request(value));
    off();
  }

  render() {
    const { loader } = this.props;
    if (loader) {
      return (
        <Preloader />
      );
    }
    const { categories } = this.props;
    return (
      <Categorie
        categories={categories.categories}
        buttonNextPage={this.buttonNextPage}
        buttonPreviousPage={this.buttonPreviousPage}
      />
    );
  }
}

const ContainerCategorie = connect(contentParam, {
  addCategorie,
  categorieLoaderOn,
  categorieLoaderOff,
  categorieMinus,
  categoriePlus,
})(PreCategorie);

PreCategorie.propTypes = {
  categories: PropTypes.objectOf.isRequired,
  addCategorie: PropTypes.func.isRequired,
  categorieLoaderOff: PropTypes.func.isRequired,
  categorieLoaderOn: PropTypes.func.isRequired,
  categoriePlus: PropTypes.func.isRequired,
  categorieMinus: PropTypes.func.isRequired,
  loader: PropTypes.bool.isRequired,
  offset: PropTypes.number.isRequired,
};

export default ContainerCategorie;
