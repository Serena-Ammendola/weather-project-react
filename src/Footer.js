import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <footer>
      This project was coded by
      <a
        href="https://github.com/Serena-Ammendola"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        Serena Ammendola
      </a>{" "}
      and is
      <a
        href="https://github.com/Serena-Ammendola/weather-project-react"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        on GitHub{" "}
      </a>
      and hosted
      <a
        href="https://weather-app-react-project1.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        on Netlify.
      </a>
    </footer>
  );
}
