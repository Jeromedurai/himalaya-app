import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { ScrollToTop } from './other/ScrollToTop';
import { CartProvider } from './context/CartProvider';
import { FilterProvider } from './context/FilterContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WishListProvider } from './context/WishListContext';
import { UserProvider } from './context/useAuth';
import { ProductsProvider } from './context/products_context';
import { ProductFilterProvider } from './context/filter_context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: Infinity,
      refetchOnMount: false
    }
  }
})

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
        <UserProvider>
          <ProductsProvider>
            <ProductFilterProvider>
            {/* <FilterProvider> */}
              <CartProvider>
                <WishListProvider>
                  <Router>
                    <ScrollToTop />
                    <App />
                  </Router>
                </WishListProvider>
              </CartProvider>
            {/* </FilterProvider> */}
            </ProductFilterProvider>
            </ProductsProvider>
        </UserProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
