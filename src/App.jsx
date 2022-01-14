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
import Diagnostic from './pages/Diagnostic';
import Prescription from './pages/ePrescription';
import Documents from './pages/Documents';
import Sidebar from './components/Sidebar';
import Navigation from './components/Navigation';
import './styles.css';

const App = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [detailsList, setDetailsList] = useState([]);
  const URL = 'https://backend-django-innovaccer.herokuapp.com/medicalSummary';

  const handle = () => {
    localStorage.setItem('token', JSON.stringify(token));
  };
  const remove = () => {
    localStorage.removeItem('token');
  };

  useEffect(() => {
    fetch(URL, {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDetailsList(data);
      })
      .catch((error) => console.log(error));

    setUser(localStorage.getItem('token'));
  }, [token]);

  return (
    <BrowserRouter>
      <div>
        <Navigation user={user} remove={remove} />
        <div className='main-container'>
          {user && <Sidebar />}
          <div className='content-wrapper'>
            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route
                path='/login'
                element={<Login setToken={setToken} setUser={setUser} />}
              />
              <Route path='/register' element={<Register />} />
              <Route path='/planofcare' element={<PlanOfCare />} />
              <Route path='/medication' element={<Medication />} />
              <Route path='/problemList' element={<ProblemList />} />
              <Route path='/diagnostic' element={<Diagnostic />} />
              <Route path='/pastHistory' element={<PastHistory />} />
              <Route path='/documentation' element={<Documents />} />
              <Route path='/eprescription' element={<Prescription />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
