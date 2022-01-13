import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Register from './pages/Register';
import Navigation from './components/Navigation';
import NotFound from './pages/NotFound';
import Sidebar from './components/Sidebar';
import Medication from './pages/Medication';
import ProblemList from './pages/ProblemList';
import PastHistory from './pages/PastHistory';
import PlanOfCare from './pages/PlanOfCare';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles.css';
// import Planofcare from './pages/Planofcare';

const App = () => {
  const user = true;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [detailsList, setDetailsList] = useState([]);
  const URL = 'https://backend-django-innovaccer.herokuapp.com/';

  const handleUser = () => {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  };
  const removeUser = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  };

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((response) => setDetailsList(response))
      .catch((error) => console.log(error));

    console.log(detailsList);
  }, []);

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
              <Route path='/past-history' element={<PastHistory />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
