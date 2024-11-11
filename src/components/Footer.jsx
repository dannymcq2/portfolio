import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Danny McHugh.</p>
      <ul className="social-links">
        <li><a href="https://github.com/dannymcq2" target="_blank" rel="noopener noreferrer">GitHub</a></li>
      </ul>
    </footer>
  );
}

export default Footer;