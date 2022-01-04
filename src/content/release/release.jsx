import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './release.module.css';

function Release(props) {
  return (
    <>
      <div className={s.items}>
        {props.releases.albums.items.map((album) => (
          <Link key={album.id} to={`/albums/${album.id}`}>
            <div className={s.item}>
              <div className={s.cover}>
                <img src={album.images[1].url} alt="img" />
              </div>

              <div className={s.name}>
                <h1>{album.name}</h1>
              </div>

              <div className={s.artists}>
                <p>
                  {album.artists.map((artist) => (
                    `${artist.name} `
                  ))}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className={s.paginator}>
        {props.releases.albums.previous
          ? (
            <button
              type="button"
              onClick={() => { props.buttonPreviousPage(props.releases.albums.previous); }}
            >
              Previous
            </button>
          )
          : (<button type="button" disabled>Previous</button>)}
        {props.releases.albums.next
          ? (
            <button
              type="button"
              onClick={() => { props.buttonNextPage(props.releases.albums.next); }}
            >
              Next
            </button>
          )
          : (<button type="button" disabled>Next</button>)}
      </div>
    </>
  );
}

Release.propTypes = {
  releases: PropTypes.string.isRequired,
  buttonPreviousPage: PropTypes.func.isRequired,
  buttonNextPage: PropTypes.func.isRequired,
};

export default Release;
