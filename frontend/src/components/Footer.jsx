import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <div className="footer__grid">
      <div>
        <h4 className="footer__title">Creative Space</h4>
        <p className="footer__text">
          A black & white digital agency building sharp, conversion-ready experiences.
        </p>
      </div>
      <div>
        <h5 className="footer__heading">Services</h5>
        <ul className="footer__list">
          <li><Link to="/services">Web Development</Link></li>
          <li><Link to="/services">App Development</Link></li>
          <li><Link to="/services">UI/UX Design</Link></li>
          <li><Link to="/services">Brand & Graphic Design</Link></li>
          <li><Link to="/services">SEO & Performance</Link></li>
          <li><Link to="/services">Social & Paid Media</Link></li>
        </ul>
      </div>
      <div>
        <h5 className="footer__heading">Navigation</h5>
        <ul className="footer__list">
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/team">Team</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Start a Project</Link></li>
        </ul>
      </div>
      <div>
        <h5 className="footer__heading">Contact</h5>
        <p className="footer__text">
          hello@creativespace.agency<br />
          +383 00 000 000<br />
          Prishtina, Kosovo
        </p>
        <div className="footer__social">
          <span>IG</span>
          <span>LI</span>
          <span>BE</span>
          <span>DR</span>
        </div>
      </div>
    </div>
    <div className="footer__bottom">
      <span>© {new Date().getFullYear()} Creative Space. All rights reserved.</span>
      <span>Designed in black &amp; white.</span>
    </div>
  </footer>
);

export default Footer;
