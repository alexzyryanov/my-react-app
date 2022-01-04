import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import Genre from './genre';
import { addGenre, genreLoaderOff } from '../../redux/genre_reduser';
import request from '../../api/api';
import Preloader from '../preloader/preloader';

const contentParam = (state) => ({
  genres: state.genres.genres,
  loader: state.genres.genreLoader,
});

class PreGenre extends React.Component {
  async componentDidMount() {
    this.props.addGenre(await request('https://api.spotify.com/v1/recommendations/available-genre-seeds'));
    this.props.genreLoaderOff();
  }

  render() {
    if (this.props.loader) {
      return (
        <Preloader />
      );
    }
    return (<Genre genres={this.props.genres.genres} />);
  }
}

const ContainerGenre = connect(contentParam, { addGenre, genreLoaderOff })(PreGenre);

PreGenre.propTypes = {
  addGenre: PropTypes.func.isRequired,
  genreLoaderOff: PropTypes.func.isRequired,
  loader: PropTypes.bool.isRequired,
  genres: PropTypes.string.isRequired,
};

export default ContainerGenre;
