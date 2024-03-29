import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter as BrowserRouter } from 'react-router-dom';
import { NextUIProvider } from "@nextui-org/react";
import { App } from './App.jsx'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <NextUIProvider>
        <div className="h-screen items-start justify-center ">
          <App />
        </div>  
      </NextUIProvider>
    </BrowserRouter>
  </React.StrictMode>
);