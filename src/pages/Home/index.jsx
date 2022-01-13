import React from 'react';
import home from './home.svg';
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <img className='home-img' src={home} alt='home' />
      <h1 className='home-header'>Welcome to inrecord</h1>
    </div>
  );
};

export default Home;
