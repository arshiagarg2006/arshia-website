import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import CoverLetter from "./pages/CoverLetter";
import ElevatorPitch from "./pages/ElevatorPitch";
import SampleWork from "./pages/SampleWork";
import "./App.css";
import "./styles/pages.css";

function NavLinks() {
  const location = useLocation();
  
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/resume" className={location.pathname === "/resume" ? "active" : ""}>
            Resume
          </Link>
        </li>
        <li>
          <Link to="/cover-letter" className={location.pathname === "/cover-letter" ? "active" : ""}>
            Cover Letter
          </Link>
        </li>
        <li>
          <Link to="/elevator-pitch" className={location.pathname === "/elevator-pitch" ? "active" : ""}>
            Elevator Pitch
          </Link>
        </li>
        <li>
          <Link to="/sample-work" className={location.pathname === "/sample-work" ? "active" : ""}>
            Sample Work
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Your Name</h1>
          <NavLinks />
        </header>

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/cover-letter" element={<CoverLetter />} />
            <Route path="/elevator-pitch" element={<ElevatorPitch />} />
            <Route path="/sample-work" element={<SampleWork />} />
          </Routes>
        </main>

        <footer>
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
