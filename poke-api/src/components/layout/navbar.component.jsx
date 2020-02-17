import React from 'react';

const imgStyle = {
  width: 118,
  height: 50
};

export const NavBar = () => {
  return (
    <nav
      className='navbar navbar-expand-lg'
      style={{ backgroundColor: '#EF5350' }}
    >
      <div className='container'>
        <a className='navbar-brand' href='#'>
          <img
            src='https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'
            alt=''
            style={imgStyle}
          />
        </a>
      </div>
    </nav>
  );
};
