import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <h6>Stas Miagchilo</h6>

      <div>
        <a href="https://4mycfi35btb.typeform.com/to/OsPcR9pz" target="_blank" rel="noopener noreferrer">
          Connect
        </a>
        <a href="https://instagram.com/miagchilo" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      
      </div>

    </footer>
  );
}
