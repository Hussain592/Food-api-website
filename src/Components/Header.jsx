import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header-section-main">
      <div className="container">
        <div className="header-main">
          <div className="header-logo">
            <h1>Hussain</h1>
          </div>
          <div className="header-nav">
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-i">
            <a href=""><i class="fi fi-brands-instagram"></i></a>
             <a href=""><i class="fa-solid fa-cart-shopping"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}
