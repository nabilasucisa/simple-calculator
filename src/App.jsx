// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Calculator from "./pages/Calculator";
import QuranVerse from "./pages/QuranVerse";
import Sidebar from "./components/Sidebar"; // Ensure this path is correct
import "./App.css";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Calculator />} />
            <Route path="/quran" element={<QuranVerse />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
