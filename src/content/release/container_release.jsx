import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Release from './release';
import {
  addRelease, releaseLoaderOn, releaseLoaderOff, releasePlus, releaseMinus,
} from '../../redux/release_reduser';
import request from '../../api/api';
import Preloader from '../preloader/preloader';

const contentParam = (state) => ({
  releases: state.releases.releases,
  loader: state.releases.releaseLoader,
  offset: state.releases.releaseOffset,
});

class PreRelease extends React.Component {
  constructor(props) {
    super(props);
    this.buttonNextPage = this.buttonNextPage.bind(this);
    this.buttonPreviousPage = this.buttonPreviousPage.bind(this);
  }

  async componentDidMount() {
    const { offset, addRelease: add, releaseLoaderOff: off } = this.props;
    add(await request(
      `https://api.spotify.com/v1/browse/new-releases?locale=ru&offset=${offset}&limit=20`,
    ));
    off();
  }

  async buttonNextPage(value) {
    const {
      releases,
      addRelease: add,
      releaseLoaderOff: off,
      releaseLoaderOn: on,
      releasePlus: plus,
    } = this.props;
    on();
    plus(releases.albums.offset + 20);
    add(await request(value));
    off();
  }

  async buttonPreviousPage(value) {
    const {
      releases,
      addRelease: add,
      releaseLoaderOff: off,
      releaseLoaderOn: on,
      releaseMinus: minus,
    } = this.props;
    on();
    minus(releases.albums.offset - 20);
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
    const { releases } = this.props;
    return (
      <Release
        releases={releases}
        buttonNextPage={this.buttonNextPage}
        buttonPreviousPage={this.buttonPreviousPage}
      />
    );
  }
}

const ContainerRelease = connect(contentParam, {
  addRelease,
  releaseLoaderOn,
  releaseLoaderOff,
  releasePlus,
  releaseMinus,
})(PreRelease);

PreRelease.propTypes = {
  releases: PropTypes.objectOf.isRequired,
  addRelease: PropTypes.func.isRequired,
  releaseLoaderOff: PropTypes.func.isRequired,
  releaseLoaderOn: PropTypes.func.isRequired,
  releasePlus: PropTypes.func.isRequired,
  releaseMinus: PropTypes.func.isRequired,
  loader: PropTypes.bool.isRequired,
  offset: PropTypes.number.isRequired,
};

export default ContainerRelease;
