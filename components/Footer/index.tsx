import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <h6>Stas Miagchilo</h6>

      <div>
        <a href="https://twitter.com/miagchilo" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="https://instagram.com/miagchilo" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <a href="https://github.com/miagchilo" target="_blank" rel="noopener noreferrer">
          Github
        </a>
      </div>

      <h6>({year}), all rights reserved</h6>
    </footer>
  );
}
