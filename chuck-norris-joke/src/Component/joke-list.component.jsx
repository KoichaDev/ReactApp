import React, { Fragment } from 'react';
import { ChuckNorris } from './chuck-norris.component';
import { YoMama } from './yo-mama.component';

export const JokeList = ({ getChuckNorrisJokes, getYoMamaJoke }) => {
  return (
    <Fragment>
      <ChuckNorris chuckNorris={getChuckNorrisJokes} />
      <YoMama yoMama={getYoMamaJoke} />
    </Fragment>
  );
};
