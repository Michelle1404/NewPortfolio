import React from "react";
import { Link } from "react-router-dom";
import { github, linkedin, xing } from "../assets";

import { styles } from "../styles";

const Footer = () => {
  return (
    <footer
      className={`${styles.paddingX} w-full flex items-center py-2 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            Window.scrollTo(0, 0);
          }}
        >
          <span className="font-thin">©Michelle`s 2023</span>
        </Link>
        <div className="w-20 h-20 cursor-pointer">
          <a href="https://github.com/Michelle1404" target="_blank">
            <img
              src={github}
              alt="source code"
              className="w-1/2 h-1/2 object-contain"
            />
          </a>
        </div>
        <div className="w-20 h-20 cursor-pointer">
          <a
            href="https://www.linkedin.com/in/michelle-w-5a38a8250/"
            target="_blank"
          >
            <img
              src={linkedin}
              alt="source code"
              className="w-1/2 h-1/2 object-contain"
            />
          </a>
        </div>
        <div className="w-20 h-20 cursor-pointer">
          <a
            href="https://www.xing.com/profile/Michelle_Wollowski/cv"
            target="_blank"
          >
            <img
              src={xing}
              alt="source code"
              className="w-1/2 h-1/2 object-contain"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
