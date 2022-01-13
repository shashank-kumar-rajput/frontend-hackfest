import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Medication from './pages/Medication';
import ProblemList from './pages/ProblemList';
import PastHistory from './pages/PastHistory';
import PlanOfCare from './pages/PlanOfCare';
import Sidebar from './components/Sidebar';
import Navigation from './components/Navigation';
import Login from './pages/Login';
import Prescription from './pages/ePrescription';
import './styles.css';

const App = () => {
  const user = false;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [detailsList, setDetailsList] = useState([]);
  const URL = 'https://backend-django-innovaccer.herokuapp.com/medicalsummary';

  const handleUser = () => {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  };
  const removeUser = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  };

  // useEffect(() => {
  //   fetch(URL)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setDetailsList(data);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <div className='main-container'>
          {user && <Sidebar />}
          <div className='content-wrapper'>
            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route
                path='/login'
                element={
                  <Login handleUser={handleUser} removeUser={removeUser} />
                }
              />
              <Route path='/register' element={<Register />} />
              <Route path='/planofcare' element={<PlanOfCare />} />
              <Route path='/medication' element={<Medication />} />
              <Route path='/problemList' element={<ProblemList />} />
              <Route path='/diagnostic' element={<Diagnostic />} />
              <Route path='/pastHistory' element={<PastHistory />} />
              <Route path='/ePrescription' element={<Prescription />} />
              <Route path='/*' element={<NotFound />} />
              
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
