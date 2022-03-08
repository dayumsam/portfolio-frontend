import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import MouseContextProvider from "./context/mouse-context";

import './style.scss';

ReactDOM.render(
  <React.StrictMode>
    <MouseContextProvider>
      <App />
    </MouseContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
