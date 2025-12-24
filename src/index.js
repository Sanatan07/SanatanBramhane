import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Snowfall from 'react-snowfall';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <App />
    <Snowfall 
      color='#ffffff'
      snowflakeCount={200}
      style={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        zIndex: 9999
      }}
    />
  </React.StrictMode>
);
