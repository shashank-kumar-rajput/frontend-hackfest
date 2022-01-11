import React from 'react';
import Home from './pages/Home';
import Register from './pages/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles.css';
<<<<<<< HEAD
import Sidebar from './components/Sidebar';
=======
import Login from './pages/Login';

>>>>>>> 2192d8dbd6ce76d27dc57e0d39e5029428c894df
const App = () => {
  return (
    <BrowserRouter>
      <div>
<<<<<<< HEAD
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
=======
        <h1>This is navigation</h1>
        <Routes>
          <Route path='/home' exact element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
>>>>>>> 2192d8dbd6ce76d27dc57e0d39e5029428c894df
      </div>
    </BrowserRouter>
  );
};

export default App;
