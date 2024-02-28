import React, { useState } from 'react';
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
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/work">Work</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
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
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/work">Work</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </div>
      )}
    </nav>
  );
};
