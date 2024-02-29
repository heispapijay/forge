import { useState } from 'react';
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./navbar.scss";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav className="nav">
      <div className="navbar  wrapper">
        <div className="nav-logo">
          <Logo />
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/work">Work</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          <div className="menu-icon" onClick={toggleMobileMenu}>
            <svg
              width="26"
              height="15"
              viewBox="0 0 26 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.0712891"
                y="6.88281"
                width="25"
                height="2"
                fill="#030211"
              />
              <rect
                x="12.6279"
                y="0.807129"
                width="12.4168"
                height="2"
                fill="#030211"
              />
              <rect
                x="0.0644531"
                y="12.9092"
                width="12.4168"
                height="2"
                fill="#030211"
              />
            </svg>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          <Link to="/work">Work</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </div>
      )}
    </nav>
  );
};
