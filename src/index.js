import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MedicalStaff from './components/medicalStaff/MedicalStaff'
import MedicalCity from './components/medicalCity/MedicalCity';
import Login from './components/login/Login';
import reportWebVitals from './reportWebVitals';
import MedicalUser from './components/user/MedicalUser'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    {/* <MedicalCity /> */}
    {/* <MedicalStaff/> */}
    {/* <Login/> */}
    <App/>
    {/* <MedicalUser/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
