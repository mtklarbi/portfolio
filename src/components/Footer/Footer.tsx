import React from 'react';
import './style.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">Thank you for visiting!</p>
        <a
          href="https://github.com/mtklarbi"
          aria-label="GitHub Repository"
          rel="noopener noreferrer"
          target="_blank"
          className="github-link"
        >
          <i className="fab fa-github"></i> View on GitHub
        </a>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;