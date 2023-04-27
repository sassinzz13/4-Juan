import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
//this must always be a js file in cra compared to vite

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

