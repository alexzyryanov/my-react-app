import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './genre.module.css';

function Genre(props) {
  const { genres } = props;
  return (
    <div className={s.items}>
      {genres.map((genre, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Link key={index} to={`/overview/${genre}`}>
          <div className={s.item}>
            <div className={s.name}>
              <h1>{genre}</h1>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

Genre.propTypes = {
  genres: PropTypes.arrayOf.isRequired,
};

export default Genre;
