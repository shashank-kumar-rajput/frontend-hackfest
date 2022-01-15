import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Diagnostic from './pages/Diagnostic';
import PlanofCare from './pages/PlanofCare';
import Medication from './pages/Medication';
import ProblemList from './pages/ProblemList';
import PastHistory from './pages/PastHistory';
import Prescription from './pages/ePrescription';
import Documents from './pages/Documents';
import Sidebar from './components/Sidebar';
import Navigation from './components/Navigation';
import PatientInfo from './pages/PatientInfo';
import './styles.css';

const App = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [detailsList, setDetailsList] = useState([]);
  const URL = 'https://backend-django-innovaccer.herokuapp.com/medicalSummary';

  console.log(token);
  // console.log(JSON.parse(localStorage.getItem('token')).token);
  useEffect(() => {
    const getDeatails = () => {
      fetch(URL, {
        method: 'GET',
        headers: {
          Authorization: `Token ${JSON.parse(
            localStorage.getItem('token').token
          )}`,
        },
      })
        .then((response) => response.json())
        .then((response) => {
          setDetailsList(response);
          console.log(detailsList);
        })
        .catch((error) => console.log(error));
    };

    setUser(localStorage.getItem('token'));
    if (user) {
      getDeatails();
    }
  }, [token]);

  return (
    <BrowserRouter>
      <div>
        <Navigation user={user} setToken={setToken} />
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
              <Route
                path='/planofcare'
                element={user ? <PlanofCare /> : <Navigate to='/Login' />}
              />
              <Route
                path='/medication'
                element={user ? <Medication /> : <Navigate to='/Login' />}
              />
              <Route
                path='/problemList'
                element={user ? <ProblemList /> : <Navigate to='/Login' />}
              />
              <Route
                path='/diagnostic'
                element={user ? <Diagnostic /> : <Navigate to='/Login' />}
              />
              <Route
                path='/pastHistory'
                element={user ? <PastHistory /> : <Navigate to='/Login' />}
              />
              <Route
                path='/documentation'
                element={user ? <Documents /> : <Navigate to='/Login' />}
              />
              <Route
                path='/eprescription'
                element={user ? <Prescription /> : <Navigate to='/Login' />}
              />
              <Route
                path='/patientInfo'
                element={<PatientInfo /> }
              />
              <Route path='/*' element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
