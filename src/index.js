/*eslint-disable*/
import React from 'react';
import { createRoot } from 'react-dom/client';
import './style/index.css';
import { Provider } from 'react-redux';
import App from './App';
import Store from './Redux/store';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
);
