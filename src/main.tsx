import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Page1 } from './pages/page1'
import { Page2 } from './pages/page2'

const App: React.FC = () => {
  return (
    <>
      <h1>hi from React router</h1>
      <nav>
        <Link to="/page1">page1</Link> - <Link to="/page2">page2</Link>
      </nav>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="page1" element={<Page1 />} />
        <Route path="page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
