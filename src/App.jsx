import React from 'react';
import Home from './pages/Home';
import Register from './pages/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles.css';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>This is navigation</h1>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
