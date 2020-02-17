import React, { Fragment } from 'react';

export const ChuckNorris = ({ chuckNorris }) => {
  return (
    <Fragment>
      <button className='btn btn-primary' onClick={chuckNorris}>
        Chuck Norris Joke
      </button>
    </Fragment>
  );
};
