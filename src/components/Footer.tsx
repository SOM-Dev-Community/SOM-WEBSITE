import React from "react";
import "../Styles/Footer.css";
// import somLogo from "../assets/som-logo.png";
import avatar1 from "../assets/event1.avif";
import avatar2 from "../assets/event2.avif";
import avatar3 from "../assets/event3.avif";
import avatar4 from "../assets/event4.avif";

const Footer = () => (
  <footer className="footer">
    <div className="footer-newsletter">
      <h2 style={{fontSize: '32px'}}>Join Our mailing List</h2>
      <p style={{fontSize: '15px'}}>
        Join our mailing list to be the first to know about our services, special programs, <br/>testimonies, and ways to grow in faith together.
      </p>
      <form className="footer-form">
        <input type="email" placeholder="Enter email" required />
        <button type="submit">Submit</button>
      </form>
    </div>
    <div className="footer-main">
      <div className="footer-col">
        <h4>ABOUT US</h4>
        <p style={{fontSize: '13px', lineHeight: '22px'}}>
          The place where you discover <br/> your purpose, passion, and <br/> power to live out the God-life.
        </p>
      </div>
      <div className="footer-col">
        <h4>QUICKLINKS</h4>
        <ul>
          <li style={{fontSize: '13px', lineHeight: '25px'}}>Blog</li>
          <li style={{fontSize: '13px', lineHeight: '25px'}}>Explore</li>
          <li style={{fontSize: '13px', lineHeight: '25px'}}>Contact Us</li>
          <li style={{fontSize: '13px', lineHeight: '25px'}}>Live Events</li>
          <li style={{fontSize: '13px', lineHeight: '25px'}}>Preachers Kids' Network</li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>CONTACT US</h4>
        <p style={{fontSize: '13px'}}>+234 000 000 000</p>
        <p style={{fontSize: '13px'}}>@loveworldsonsofministry.org</p>
      </div>
    </div>
    <div className="footer-bottom">
      {/* <img src={somLogo} alt="SOM Logo" className="footer-logo"></img> */}
      <span>© 2025 loveworldsonsofministry . All Rights Reserved.</span>
      <div className="footer-avatars">
        <img src={avatar1} alt="avatar" />
        <img src={avatar2} alt="avatar" />
        <img src={avatar3} alt="avatar" />
        <img src={avatar4} alt="avatar" />
      </div>
    </div>
  </footer>
);

export default Footer;
