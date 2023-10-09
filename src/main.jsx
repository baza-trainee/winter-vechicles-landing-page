import React from 'react';
import ReactDOM from 'react-dom/client';
import { Suspense } from 'react';
import App from './components/App/App';
import './i18n';

import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  </React.StrictMode>
);
