import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      if (current > lastScroll && current > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScroll(current);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastScroll]);

  useEffect(() => {
    setHidden(false);
  }, [location.pathname]);

  return (
    <header className={`navbar ${hidden ? 'navbar--hidden' : ''}`}>
      <div className="navbar__inner">
        <NavLink to="/" className="navbar__logo">
          CREATIVE <span>SPACE</span>
        </NavLink>
        <nav className="navbar__nav">
          <NavLink to="/services" className="navbar__link">Services</NavLink>
          <NavLink to="/projects" className="navbar__link">Projects</NavLink>
          <NavLink to="/team" className="navbar__link">Team</NavLink>
          <NavLink to="/contact" className="navbar__link navbar__link--outline">
            Start a Project
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
