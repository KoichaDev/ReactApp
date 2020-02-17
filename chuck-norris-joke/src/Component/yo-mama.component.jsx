import React, { Fragment } from 'react';

export const YoMama = ({ yoMama }) => {
  return (
    <Fragment>
      <button className='btn btn-secondary' onClick={yoMama}>
        Get YoMama
      </button>
    </Fragment>
  );
};
