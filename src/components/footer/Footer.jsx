import React from "react";
import "./footer.css";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>
          &copy; 2025 Your E-Learning Platform. All rights reserved. <br /> Made
          with ❤️ <a href="">Akshat Mishra</a>
        </p>
        <div className="social-links">
          <a href="">
            <AiFillFacebook />    {/*ai icons */}
          </a>
          <a href="">
            <AiFillTwitterSquare />  {/* ai icon for twitter */}
          </a>
          <a href="">
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
