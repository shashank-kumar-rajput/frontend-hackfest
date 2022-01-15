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
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [patientInfo, setPatientInfo] = useState([]);
  const URL = 'https://backend-django-innovaccer.herokuapp.com/patientInfo';

  const getToken = () => JSON.parse(localStorage.getItem('token')).token;

  console.log(getToken());
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
              <Route path='/planofcare' element={<PlanOfCare />} />
              <Route path='/medication' element={<Medication />} />
              <Route path='/problemList' element={<ProblemList />} />
              <Route path='/diagnostic' element={<Diagnostic />} />
              <Route path='/pastHistory' element={<PastHistory />} />
              <Route path='/documentation' element={<Documents />} />
              <Route path='/eprescription' element={<Prescription />} />
              <Route
                path='/patientInfo'
                element={<PatientInfo getToken={getToken} />}
              />
              <Route path='/patientform' element={<PatientForm />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
