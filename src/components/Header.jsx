import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    setMenuOpen(false);

    navigate("/", {
      state: { scrollToRegistration: true },
    });
  };

  return (
    <header className="header">
      {/* Left Side: Logo */}
      <div className="header-logo">
        <div className="logo-icon">
          <img src="/logo.png" className="logo-image" />
        </div>

        <div className="logo-text"> 
          <h2>
            <span className="ASC-text">asc</span>
            <span className="INFOVISION-text">Infovision</span>
          </h2>
          <p>Learn Today, Lead Tomorrow</p>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Right Side: Navigation */}
      <nav className={`header-nav ${menuOpen ? "active" : ""}`}>
        <Link to="/about" onClick={() => setMenuOpen(false)}>
          About
        </Link>

        <Link to="/location" onClick={() => setMenuOpen(false)}>
          Location
        </Link>

        <Link to="/achievers" onClick={() => setMenuOpen(false)}>
          Our Achievers
        </Link>

        <button type="Button" className="header-cta" onClick={handleGetStarted}>
          Get Started
        </button>
      </nav>
    </header>
  );
}

export default Header;
