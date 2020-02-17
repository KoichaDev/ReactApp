import React, { Fragment } from 'react';
/* 
const onSubmit = ({ e, SearchPokemon }) => {
  e.preventDefault();

  SearchPokemon = { SearchPokemon };
}; */

export const SearchPokemon = ({ getPokemon, search, handleChangePokemon }) => {
  return (
    <Fragment>
      <div className='col-xl-3'></div>
      <div className='col-xl-6'>
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Search a Pokémon... '
            aria-label='Search a Pokémon...'
            aria-describedby='search-pokemon'
            onChange={handleChangePokemon}
            value={search}
          />
          <div className='input-group-append'>
            <button
              className='btn btn-success'
              onClick={() => getPokemon(search)}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className='col-xl-3'></div>
    </Fragment>
  );
};
