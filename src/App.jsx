import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles.css';
import Sidebarcomp from './components/Sidebar/Sidebar';
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>This is navigation</h1>
        <Sidebarcomp/>
        <Routes>
          <Route path='/home' exact element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
