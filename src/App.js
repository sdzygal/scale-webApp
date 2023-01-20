import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import { Home, About, Customers, Resources, Pricing } from "./pages/import";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="about" element={ <About /> } />
      <Route path="customers" element={ <Customers /> } />
      <Route path="pricing" element={ <Pricing /> } />
      <Route path="resources" element={ <Resources /> } />
        </Routes>
    </div>
  );
}

export default App;
