// src/App.jsx
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Dashboard from "./pages/Dashboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-white text-3xl font-bold mt-4">Vite + React</h1>
      <div className="card mt-4">
        <button onClick={() => setCount((c) => c + 1)}>
          count is {count}
        </button>
      </div>

      {/* Dashboard */}
      <Dashboard />
    </div>
  );
}

export default App;