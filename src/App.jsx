import React from 'react';
import Home from './pages/Home';
import Register from './pages/Register';
import Navigation from './components/Navigation';
import Notfound from './pages/Notfound';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles.css';
import Login from './pages/Login';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <div className='main-container'>
          <Sidebar />
          <div className='content-wrapper'>
            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/*' element={<Notfound />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
