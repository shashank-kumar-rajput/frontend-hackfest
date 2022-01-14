import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({ user }) => {
  return (
    <nav className='navigation'>
      <div className='logo'>
        <Link to='/' className='logo-link'>
          <span>in</span>record 🚀
        </Link>
      </div>
      <ul className='list'>
        <li className='list-item'>
          {
            <Link to={!user ? '/login' : '/'} className='link'>
              {!user ? 'Login' : 'Logout'}
            </Link>
          }
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
