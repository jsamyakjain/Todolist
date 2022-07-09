import React from 'react';
import "../Footer.css";

export const Footer = () => {

    let footerStyle = {
      top: "70vh",
      position: "relative",
      width: "100%",
      border: "2px solid blue"
    };

  return (
    <footer className="bg-dark text-light" class="foot" style={footerStyle}>
      <p className="text-center">
        Copyright &copy; Samyak Jain
      </p>
    </footer>
  )
}
