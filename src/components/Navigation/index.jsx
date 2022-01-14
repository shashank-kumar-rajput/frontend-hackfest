import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({ user, setToken }) => {
  const handleLinkClick = () => {
    if (user) {
      localStorage.removeItem('token');
    }
  };

  return (
    <nav className='navigation'>
      <div className='logo'>
        <Link to='/' className='logo-link'>
          <span className='invert lg'>In</span>Record 🚀
        </Link>
      </div>
      <ul className='list'>
        <li className='list-item'>
          {user ? (
            <a href='/' className='link' onClick={handleLinkClick}>
              Logout
            </a>
          ) : (
            <Link to='/login' className='link'>
              Login
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
