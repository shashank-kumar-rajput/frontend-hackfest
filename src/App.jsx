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
import PatientInfo from './pages/PatientInfo';
import PatientForm from './pages/PatientForm';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';
import './styles.css';

const App = () => {
  const getToken = () => JSON.parse(localStorage.getItem('token'));
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const URL = 'https://backend-django-innovaccer.herokuapp.com/patientInfo';

  // console.log(getToken());
  // useEffect(() => {
  //   const getDeatails = () => {
  //     fetch(URL, {
  //       method: 'GET',
  //       headers: {
  //         Authorization: `Token ${getToken()}`,
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then((response) => {
  //         setPatientInfo(response);
  //       })
  //       .catch((error) => console.log(error));
  //   };

  //   setUser(getToken());
  //   if (user) {
  //     getDeatails();
  //   }
  // }, [token]);

  return (
    <BrowserRouter>
      <div>
        <Navigation user={user} getToken={getToken} />
        <div className='main-container'>
          {getToken() && <Sidebar />}
          <div className='content-wrapper'>
            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route
                path='/login'
                element={
                  <Login
                    setToken={setToken}
                    setUser={setUser}
                    getToken={getToken}
                  />
                }
              />
              <Route path='/register' element={<Register />} />
              <Route
                path='/planofcare'
                element={getToken() ? <PlanofCare /> : <Navigate to='/login' />}
              />
              <Route
                path='/medication'
                element={getToken() ? <Medication /> : <Navigate to='/login' />}
              />
              <Route
                path='/problemList'
                element={
                  getToken() ? <ProblemList /> : <Navigate to='/login' />
                }
              />
              <Route
                path='/diagnostic'
                element={getToken() ? <Diagnostic /> : <Navigate to='/login' />}
              />
              <Route
                path='/pastHistory'
                element={
                  getToken() ? <PastHistory /> : <Navigate to='/login' />
                }
              />
              <Route
                path='/documentation'
                element={getToken() ? <Documents /> : <Navigate to='/login' />}
              />
              <Route
                path='/eprescription'
                element={
                  getToken() ? <Prescription /> : <Navigate to='/login' />
                }
              />
              <Route
                path='/patientInfo'
                element={
                  getToken() ? (
                    <PatientInfo getToken={getToken} />
                  ) : (
                    <Navigate to='/login' />
                  )
                }
              />
              <Route
                path='/patientform'
                element={
                  getToken() ? <PatientForm /> : <Navigate to='/login' />
                }
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
