import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App'
import Navegacao from './Navegacao'

ReactDOM.render(
  <React.StrictMode>
   <App />
   <Navegacao />
  </React.StrictMode>,
  document.getElementById('root')
);
