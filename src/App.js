import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Cakes from "./pages/Cakes";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={[<Header />, <SideBar />]} />

        <Route path="/cakes" element={<Cakes />} />
      </Routes>
    </div>
  );
}

export default App;
