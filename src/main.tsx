import './index.css'
import { App } from './app'
import { Toaster } from "sonner";
import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Toaster richColors/>
  </React.StrictMode>,
)
