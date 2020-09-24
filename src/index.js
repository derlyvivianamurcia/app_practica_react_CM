import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './components/styles/Global.css'
import Aplicacion from './routers/Aplicacion';
//import App from './App';

ReactDOM.render(
  <>
    <Aplicacion />
  </>,
  document.getElementById('root')
);

