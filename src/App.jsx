import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import FaceTemplates from "./pages/FaceTemplates";
import Credits from "./pages/Credits";

import Navbar from "./components/Navbar";

import github from "./assets/icons/github.svg";

function App() {
  return (
    <div className="main">
      <Router>
        <Navbar />
{/*         <a
        href="https://main.d3gk1d0sba0003.amplifyapp.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h1 className="hush">🤫</h1>
      </a> */}
      <a
        href="https://github.com/caglayagmuricerr/bg3-head-file-modifier/tree/main"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="github" src={github} alt="github" />
      </a>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/face-templates" element={<FaceTemplates />} />
          <Route path="/credits" element={<Credits />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;