import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import CoverLetter from "./pages/CoverLetter";
import ElevatorPitch from "./pages/ElevatorPitch";
import SampleWork from "./pages/SampleWork";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/cover-letter">Cover Letter</Link></li>
            <li><Link to="/elevator-pitch">Elevator Pitch</Link></li>
            <li><Link to="/sample-work">Sample Work</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/cover-letter" element={<CoverLetter />} />
          <Route path="/elevator-pitch" element={<ElevatorPitch />} />
          <Route path="/sample-work" element={<SampleWork />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
