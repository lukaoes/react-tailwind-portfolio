import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css'
import Footer from './components/footer';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { routes } from './components/routes';

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='mx-auto max-w-[1440px] min-w-[372px]'>
      <RouterProvider router={router} />
      <Footer />
    </div>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
