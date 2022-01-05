import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './categorie.module.css';

function Categorie(props) {
  const { categories, buttonPreviousPage: PreviousPage, buttonNextPage: NextPage } = props;
  return (
    <>
      <div className={s.items}>
        {categories.items.map((categ) => (
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
        {categories.previous
          ? (
            <button
              type="button"
              onClick={() => { PreviousPage(categories.previous); }}
            >
              Previous
            </button>
          )
          : (<button type="button" disabled>Previous</button>)}
        {categories.next
          ? (
            <button
              type="button"
              onClick={() => { NextPage(categories.next); }}
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
  categories: PropTypes.objectOf.isRequired,
  buttonPreviousPage: PropTypes.func.isRequired,
  buttonNextPage: PropTypes.func.isRequired,
};

export default Categorie;
