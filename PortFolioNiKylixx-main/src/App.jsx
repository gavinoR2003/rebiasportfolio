import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import OJT from './components/OJT';
import Certifications from './components/Certifications';
import Reflection from './components/Reflection';
import ResumeContact from './components/ResumeContact';
import Declaration from './components/Declaration';
import './App.css';

// Navigation Component with active state
function Navigation({ menuOpen, setMenuOpen }) {
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'About Me', path: '/about', icon: '👤' },
    { name: 'Educational Background', path: '/education', icon: '🎓' },
    { name: 'Technical Skills', path: '/skills', icon: '💻' },
    { name: 'Projects & Capstone', path: '/projects', icon: '🚀' },
    { name: 'OJT / Internship', path: '/ojt', icon: '💼' },
    { name: 'Certifications & Trainings', path: '/certifications', icon: '📜' },
    { name: 'Reflection / Learning Journey', path: '/reflection', icon: '📖' },
    { name: 'Resume & Contact', path: '/resume', icon: '📄' },
    { name: 'Declaration & Ethics', path: '/declaration', icon: '✍️' }
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`vertical-nav ${menuOpen ? 'open' : ''}`}>
        <div className="nav-header">
          <Link to="/" className="nav-logo" onClick={closeMenu}>
            Vincent Mag-aso
          </Link>
        </div>
        
        <button className="nav-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${menuOpen ? 'active' : ''}`}></span>
        </button>
        
        <ul className="nav-menu">
          {navItems.map((item, index) => (
            <li 
              key={index} 
              className="nav-item"
              style={{ animationDelay: `${0.1 + index * 0.05}s` }}
            >
              <Link 
                to={item.path} 
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-text">{item.name}</span>
                <span className="nav-arrow">→</span>
              </Link>
            </li>
          ))}
        </ul>
        
        <div className="nav-footer">
          <p>&copy; Vyncy Portfolio 2025</p>
        </div>
      </nav>
      
      <div className={`nav-overlay ${menuOpen ? 'active' : ''}`} onClick={closeMenu}></div>
    </>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="app-container">
        <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/ojt" element={<OJT />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/reflection" element={<Reflection />} />
            <Route path="/resume" element={<ResumeContact />} />
            <Route path="/declaration" element={<Declaration />} />
          </Routes>
        </main>
        
      </div>
    </Router>
  );
}

export default App;