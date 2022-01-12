import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className='navigation'>
      <div className='logo'>
        <span>in</span>record 🚀
      </div>
      <ul className='list'>
        <li className='list-item'>About us</li>
        <li className='list-item'>Login</li>
      </ul>
    </nav>
  );
};

export default Navigation;
