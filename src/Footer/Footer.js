import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <p>
          © {new Date().getFullYear()} Designed & Developed by
          <span className="author"> Aviligonda Yugendra Kumar</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
