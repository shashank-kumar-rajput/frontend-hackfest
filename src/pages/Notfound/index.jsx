import React from 'react';
import notfound from './notfound.svg';

const Notfound = () => {
  return (
    <div className='page-not-found'>
      <img src={notfound} alt='page-not-found' />
      <p>Can't find page you are looking for!</p>
    </div>
  );
};

export default Notfound;
