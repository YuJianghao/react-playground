import React from "react"
import ReactDOM from "react-dom"

function App() {
  return <h1>hi from React</h1>
}

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
