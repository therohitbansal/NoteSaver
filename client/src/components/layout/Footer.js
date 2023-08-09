import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>Made with ❤️ by <a href=" https://therohitbansal.netlify.app/" target="_blank"  >
              Rohit Bansal
            </a></p>
    </footer>
  );
};

export default Footer;
