import React from 'react';

export const PokemonList = () => {
  return (
    <div className='col-xl-3'>
      <div className='card-deck'>
        <div className='card'>
          <img src='' alt='' />
          <div className='card-body'>
            <h5 className='card-title'>Card title</h5>
            <p className='card-text'>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className='card-text'>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div> /* END column */
  );
};
