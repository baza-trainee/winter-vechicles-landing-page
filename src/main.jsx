import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './components/App/App';
import './index.scss';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
