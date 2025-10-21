import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css'; // Estilos de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle'; // Funcionalidades de Bootstrap
import $ from 'jquery'; // jQuery necesario para Bootstrap
import Popper from 'popper.js'; // Popper.js necesario para Bootstrap
import MenuHospitales from './components/MenuHospitales';
import Router  from './Router';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
