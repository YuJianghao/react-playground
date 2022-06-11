import React from "react"
import ReactDOM from "react-dom/client"

const App: React.FC = () => {
  return <h1>hi from React ts</h1>
}

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
