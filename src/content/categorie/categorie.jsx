import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './categorie.module.css';

function Categorie(props) {
  return (
    <>
      <div className={s.items}>
        {props.categories.items.map((categ) => (
          <Link key={categ.id} to={`/playlists/${categ.id}`}>
            <div className={s.item}>
              <img src={categ.icons[0].url} alt="cover" />
              <div className={s.name}>
                <h1>{categ.name}</h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className={s.paginator}>
        {props.categories.previous
          ? (
            <button
              type="button"
              onClick={() => { props.buttonPreviousPage(props.categories.previous); }}
            >
              Previous
            </button>
          )
          : (<button type="button" disabled>Previous</button>)}
        {props.categories.next
          ? (
            <button
              type="button"
              onClick={() => { props.buttonNextPage(props.categories.next); }}
            >
              Next
            </button>
          )
          : (<button type="button" disabled>Next</button>)}
      </div>
    </>
  );
}

Categorie.propTypes = {
  categories: PropTypes.string.isRequired,
  buttonPreviousPage: PropTypes.func.isRequired,
  buttonNextPage: PropTypes.func.isRequired,
};

export default Categorie;
