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
    const { addGenre: add, genreLoaderOff: off } = this.props;
    add(await request('https://api.spotify.com/v1/recommendations/available-genre-seeds'));
    off();
  }

  render() {
    const { loader } = this.props;
    if (loader) {
      return (
        <Preloader />
      );
    }
    const { genres } = this.props;
    return (<Genre genres={genres.genres} />);
  }
}

const ContainerGenre = connect(contentParam, { addGenre, genreLoaderOff })(PreGenre);

PreGenre.propTypes = {
  addGenre: PropTypes.func.isRequired,
  genreLoaderOff: PropTypes.func.isRequired,
  loader: PropTypes.bool.isRequired,
  genres: PropTypes.arrayOf.isRequired,
};

export default ContainerGenre;
