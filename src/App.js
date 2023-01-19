import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import { Home, About } from "./pages/import";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="about" element={ <About /> } />
        </Routes>
    </div>
  );
}

export default App;
