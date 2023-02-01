import React from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Cakes from "./components/Cakes";

function App() {
  return (
    <div>
      <SideBar />
      <Header />

      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/" component={</>} />
          <Route path="" component={< />} />
          <Route path="" component={< />} />

        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
