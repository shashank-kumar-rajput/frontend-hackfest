import React from 'react';
import Home from './pages/Home';
import Register from './pages/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles.css';
import Sidebar from './components/Sidebar';
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav className='navigation'>
          <div className='logo'>
            <span>in</span>record 🚀
          </div>
          <ul className='list'>
            <li className='list-item'>About us</li>
            <li className='list-item'>Login</li>
          </ul>
        </nav>
        <div className='main-container'>
          <Sidebar />
          <div className='content-wrapper'>
            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/register' element={<Register />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
