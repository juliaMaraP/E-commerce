import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Caso você tenha um arquivo de estilos

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
