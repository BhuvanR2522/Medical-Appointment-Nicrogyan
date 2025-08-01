import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="container header-container">
        <Link to="/" className="logo">MediBook</Link>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Doctors</Link></li>
            <li><Link to="/">Services</Link></li>
            <li><Link to="/">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;