import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Cakes from "./pages/Cakes";
import BottleB from "./pages/BottleB";
import Bh from "./pages/Bh";
import Bh10 from "./pages/Bh10";
import Bh12 from "./pages/Bh12";

import Bouquet from "./pages/Bouquet";
import CakePops from "./pages/CakePops";
import ChocoBerries from "./pages/ChocoBerries";
import ChocoDozen from "./pages/ChocoDozen";
import CompanyInfo from "./pages/CompanyInfo";
import CupPopcakes from "./pages/CupPopcakes";
import Designer from "./pages/Designer";
import Dozen from "./pages/Dozen";
import Flavors from "./pages/Flavors";
import LargeB from "./pages/LargeB";
import SixPack from "./pages/SixPack";
import SmallB from "./pages/SmallB";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={[<Header />, <SideBar />]} />
        <Route path="/cakes" element={<Cakes />} />
        <Route path="/designer" element={<Designer />} />
        <Route path="/flavors" element={<Flavors />} />
        <Route path="/cupcakes_cakepops" element={<CupPopcakes />} />
        <Route path="/cakepops" element={<CakePops />} />
        <Route path="/dozen" element={<Dozen />} />
        <Route path="/sixpack" element={<SixPack />} />
        <Route path="/chocoberries" element={<ChocoBerries />} />
        <Route path="/chocodozen" element={<ChocoDozen />} />
        <Route path="/bouquet" element={<Bouquet />} />
        <Route path="/breakableHeart" element={<Bh />} />
        <Route path="/bhten" element={<Bh10 />} />
        <Route path="/bh12" element={<Bh12 />} />
        <Route path="/BottleB" element={<BottleB />} />
        <Route path="/Largebottles" element={<LargeB />} />
        <Route path="/smallbottle" element={<SmallB />} />
        <Route path="/companyInfo" element={<CompanyInfo />} />
      </Routes>
    </div>
  );
}

export default App;
