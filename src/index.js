import React from 'react';
import { createRoot } from 'react-dom/client';

import './styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import App from './App';
import { makeServer } from './server';
import { ErrorFallback } from './utils/utils';
// Call make Server
makeServer();

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);
