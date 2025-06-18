import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

import './Navbar.css';

function Navbar() {
  const{darkMode,toggleTheme}=useTheme();
  return (
    <nav className="navbar">
      <div className="logo">🌟 MyPortfolio </div>
      <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li>
      <button onClick={toggleTheme} className="theme-btn">
        {darkMode ? '🌟 Light' :'🌙 Dark'}

      </button>
      </li>
      </ul>
      </nav>

      
  );    
      
}

export default Navbar;
