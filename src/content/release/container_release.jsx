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
    const { offset } = this.props;
    this.props.addRelease(await request(
      `https://api.spotify.com/v1/browse/new-releases?locale=ru&offset=${offset}&limit=20`,
    ));
    this.props.releaseLoaderOff();
  }

  async buttonNextPage(value) {
    this.props.releaseLoaderOn();
    this.props.releasePlus(this.props.releases.albums.offset + 20);
    this.props.addRelease(await request(value));
    this.props.releaseLoaderOff();
  }

  async buttonPreviousPage(value) {
    this.props.releaseLoaderOn();
    this.props.releaseMinus(this.props.releases.albums.offset - 20);
    this.props.addRelease(await request(value));
    this.props.releaseLoaderOff();
  }

  render() {
    if (this.props.loader) {
      return (
        <Preloader />
      );
    }
    return (
      <Release
        releases={this.props.releases}
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
  releases: PropTypes.string.isRequired,
  addRelease: PropTypes.func.isRequired,
  releaseLoaderOff: PropTypes.func.isRequired,
  releaseLoaderOn: PropTypes.func.isRequired,
  releasePlus: PropTypes.func.isRequired,
  releaseMinus: PropTypes.func.isRequired,
  loader: PropTypes.bool.isRequired,
  offset: PropTypes.number.isRequired,
};

export default ContainerRelease;
