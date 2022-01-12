import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className='navigation'>
      <div className='logo'>
        <Link to='/' className='logo-link'>
          <span>in</span>record 🚀
        </Link>
      </div>
      <ul className='list'>
        <li className='list-item '>
          <Link to='/login' className='link'>
            About us
          </Link>
        </li>
        <li className='list-item'>
          <Link to='/login' className='link'>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
