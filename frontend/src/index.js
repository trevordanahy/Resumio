import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import AuthStateProvider from './context/AuthStateProvider';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthStateProvider>
        <App />
      </AuthStateProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

