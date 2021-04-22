import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App'
import Exemplo from './Exemplo'

ReactDOM.render(
  <React.StrictMode>
   <App />
   <Exemplo />
  </React.StrictMode>,
  document.getElementById('root')
);
