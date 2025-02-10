import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import reportWebVitals from './reportWebVitals.ts';

import './components/Image/img/icon-72x72.png'
import './components/Image/img/icon-96x96.png'
import './components/Image/img/icon-128x128.png'
import './components/Image/img/icon-144x144.png'
import './components/Image/img/icon-152x152.png'
import './components/Image/img/icon-192x192.png'
import './components/Image/img/icon-384x384.png'
import './components/Image/img/icon-512x512.png'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();