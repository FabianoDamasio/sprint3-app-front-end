import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AllRoutes from  "./routes"
import Footer from './components/footer/footer'
import { CookiesProvider } from 'react-cookie';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CookiesProvider defaultSetOptions={{path: '/'}}>
      <AllRoutes />
      <Footer />
    </CookiesProvider>
  </React.StrictMode>
);

reportWebVitals();
