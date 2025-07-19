import React from "react";
import "./footer.css";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";
import { PiStudent } from "react-icons/pi";


const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-icon"><PiStudent size={30} /></span>
              <span className="logo-text">SHIKSHA</span>
            </div>
            <p className="brand-description">
            Your gateway to smarter learning. Explore engaging courses, track your progress, and unlock knowledge anytime, anywhere.
            </p>
          </div>
          
          <div className="footer-links">
            <div className="link-column">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Best Sellers</a></li>
                <li><a href="">Offers & Deals</a></li>
                <li><a href="">FAQs</a></li>
              </ul>
            </div>
            
            <div className="link-column">
              <h4>Need Help?</h4>
              <ul>
                <li><a href="">Refund Policy</a></li>
                <li><a href="">Payment Methods</a></li>
                <li><a href="">Contact Us</a></li>
              </ul>
            </div>
            
            <div className="link-column">
              <h4>Follow Us</h4>
              <ul>
                <li><a href=""><AiFillInstagram /> Instagram </a></li>
                <li><a href=""><AiFillTwitterSquare /> Twitter </a></li>
                <li><a href=""><AiFillFacebook /> Facebook </a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <hr className="footer-divider" />
          <p className="copyright">
            &copy; 2025 Your E-Learning Platform. All rights reserved. <br /> Made
            with ❤️ <a href="">Akshat Mishra</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
