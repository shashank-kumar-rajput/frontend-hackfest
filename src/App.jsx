import React, { useState } from 'react';
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
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [id, setId] = useState(null);
  const getToken = () => JSON.parse(localStorage.getItem('token'));
  const URL = 'https://backend-django-innovaccer.herokuapp.com/patientInfo';

  return (
    <BrowserRouter>
      <div>
        <Navigation user={user} getToken={getToken} />
        <div className='main-container'>
          {getToken() && <Sidebar id={id} />}
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
                element={
                  getToken() && id ? (
                    <PlanofCare id={id} getToken={getToken} />
                  ) : (
                    <Navigate to='/patientInfo' />
                  )
                }
              />
              <Route
                path='/medication'
                element={
                  getToken() && id ? (
                    <Medication id={id} getToken={getToken} />
                  ) : (
                    <Navigate to='/patientInfo' />
                  )
                }
              />
              <Route
                path='/problemList'
                element={
                  getToken() ? (
                    <ProblemList id={id} getToken={getToken} />
                  ) : (
                    <Navigate to='/login' />
                  )
                }
              />
              <Route
                path='/diagnostic'
                element={
                  getToken() && id ? (
                    <Diagnostic id={id} getToken={getToken} />
                  ) : (
                    <Navigate to='/patientInfo' />
                  )
                }
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
                  getToken() && id ? (
                    <Prescription id={id} getToken={getToken} />
                  ) : (
                    <Navigate to='/patientInfo' />
                  )
                }
              />
              <Route
                path='/patientInfo'
                element={
                  getToken() ? (
                    <PatientInfo setId={setId} getToken={getToken} />
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
