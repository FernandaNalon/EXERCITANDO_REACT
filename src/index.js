import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App01';
// alterar este import acima para o "App" que desejar executar.
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
  <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

