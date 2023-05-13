import React from 'react';
import { createRoot } from 'react-dom/client';

import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './assets/styles/index.scss';

const rootElement = document.getElementById('app');

if (rootElement) {
    const root = createRoot(rootElement);
    root.render(
      <Router>
        <App />
      </Router>
    );
}
