import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/index.tsx'
import './index.css'
import { GlobalProvider } from "./context/GlobalContext.js";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
)
