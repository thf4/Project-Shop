import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'
import Navegacao from './Navegacao'

ReactDOM.render(
  <React.StrictMode>
   <Header />
   <Navegacao />
  </React.StrictMode>,
  document.getElementById('root')
);
