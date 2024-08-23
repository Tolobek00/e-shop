import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer_container container">
        <div>
          <h3>e-shop</h3>
          <p>
            your one-step for all your needs. Shop with use and experience the
            best online shopping experiences.
          </p>
        </div>
        <div className="menu_nav">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link className="li">Home</Link>
            </li>
            <li>
              <Link className="li">Shop</Link>
            </li>
            <li>
              <Link className="li">Contact</Link>
            </li>
            <li>
              <Link className="li">About</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Follow us</h4>
          <div>
            <a href="">
              <FaFacebook />
            </a>
            <a href="">
              <FaTwitter />
            </a>
            <a href="">
              <FaGithub />
            </a>
            <a href="">
              <FaLinkedin />
            </a>
          </div>
          <form>
            <input type="email" placeholder="Your email" />
            <button>Subscribe</button>
          </form>
        </div>
      </div>
      <div className="bottom_foot-container">
        <div className="bottom_footer container">
          <div>
            <h2>© 2024 e-Shop. All rights reserved.</h2>
          </div>
          <div>
            <a href="">Privacy Policy</a>
            <a href="">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
