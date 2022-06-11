import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './style.css'
import { App } from './App'
import { AlertCenter } from './views/AlertCenter'

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<AlertCenter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
