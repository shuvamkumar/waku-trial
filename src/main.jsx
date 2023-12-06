import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { LightNodeProvider } from "@waku/react";
const NODE_OPTIONS = { defaultBootstrap: true };

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LightNodeProvider options={NODE_OPTIONS}>
      <App />
    </LightNodeProvider>
  </React.StrictMode>,
)
