import React from 'react';
import Home from './pages/Home';
import Register from './pages/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles.css';
import Login from './pages/Login';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>This is navigation</h1>
        <Routes>
          <Route path='/home' exact element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
