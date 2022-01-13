import React from 'react';
import notfound from './notfound.svg';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className='page-not-found'>
      <img src={notfound} alt='page-not-found' />
      <p>404 can't find page you are looking for!</p>
    </div>
  );
};

export default NotFound;
