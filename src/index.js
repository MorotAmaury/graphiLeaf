import App from './App';

import React from 'react';
import ReactDOM from 'react-dom/client'
import { HashRouter as Router } from 'react-router-dom'

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);