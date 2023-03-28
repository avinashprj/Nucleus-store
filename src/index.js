import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClient, QueryClientProvider } from 'react-query';
import { persistQueryClient } from 'react-query/persistQueryClient-experimental';
import { createWebStoragePersistor } from 'react-query/createWebStoragePersistor-experimental';
import App from './App';
import { makeServer } from './server';
import { ErrorFallback } from './utils/utils';
import { ProductContextProvider } from './store/index.store';
import { CartContextProvider } from './store/Context/CartContext';
import { WishlistContextProvider } from './store/Context/WishlistContext';
import { AuthContextProvider } from './store/Context/AuthContext';
import { SearchContextProvider } from './store/Context/SearchContext';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// Call make Server
makeServer();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
}); // note: make instance of QueryClient

const localStoragePersistor = createWebStoragePersistor({
  storage: window.localStorage,
});
persistQueryClient({
  queryClient,
  persistor: localStoragePersistor,
});

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <QueryClientProvider client={queryClient}>
          <ProductContextProvider>
            <CartContextProvider>
              <WishlistContextProvider>
                <SearchContextProvider>
                  <AuthContextProvider>
                    <App />
                  </AuthContextProvider>
                </SearchContextProvider>
              </WishlistContextProvider>
            </CartContextProvider>
          </ProductContextProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);
serviceWorkerRegistration.register();
