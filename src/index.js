import React from 'react';
import ReactDOM from 'react-dom/client';
import './LightBulb.css';
import LightBulb from './LightBulb';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <div className="center-container">
    <LightBulb />
    </div>
  </React.StrictMode>
);