import React from 'react';

// We can use stateless Functional Component instead of using the class Component
// ! LifeCycle hooks doesn't work on a stateless functional component, but only in class Component

export const NavBar = ({ totalCounters }) => {
  console.log('NavBar - Rendered Component');
  return (
    <nav className='navbar navbar-light bg-light'>
      <a className='navbar-brand' href='#'>
        Navbar
        <span className='badge badge-pill badge-secondary ml-2'>
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};
