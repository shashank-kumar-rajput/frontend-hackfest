import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({ user, remove }) => {
  const navigate = useNavigate();

  const handleLinkClick = () => {
    console.log('here');
    if (user) {
      remove('token');
    }
  };

  return (
    <nav className='navigation'>
      <div className='logo'>
        <Link to='/' className='logo-link'>
          <span>in</span>record 🚀
        </Link>
      </div>
      <ul className='list'>
        <li className='list-item'>
          {!user ? (
            <Link to='/login' className='link'>
              Login
            </Link>
          ) : (
            <a href='/login' className='link' onClick={handleLinkClick}>
              Logout
            </a>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
