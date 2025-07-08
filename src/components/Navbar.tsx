import React from 'react';
import '../Styles/NavBar.css';

const NavBar = () => (
  <nav className="navbar">
    <div className="navbar-logo" style={{marginLeft: '50px'}}>SOM
    </div>
    <div className="navbar-links" style={{marginLeft: '70px', marginRight: '70px'}} >
      <a href="/" style={{ fontSize: '11px' }}>Home</a>
      <a href="/about" style={{ fontSize: '11px' }}>About Us</a>
      <a href="/preachers-kids" style={{ fontSize: '11px' }}>Preachers Kids' Network</a>
      <a href="/explore" style={{ fontSize: '11px' }}>Explore</a>
      <a href="/blog" style={{ fontSize: '11px' }}>Blog</a>
      <a href="/events" style={{ fontSize: '11px' }}>Live Events</a>
    </div>
    <button className="contact-btn">Contact Us</button>
  </nav>
);

export default NavBar;
