import React from "react";
import Contact from "../contact/contact.js";


function Nav() {

  return (
    <header className=" flex-row">
      <h2>
        <a href="/">
          Adam G
        </a>
      </h2>
      <nav>
        <ul className="Nav flex-row">
          <li className="mx-2">
            <a href="#about">
              About me
            </a>
          </li>
          <li className="mx-2">
            <a href="#contact">
              Contact
            </a>
          </li>
          <li className="mx-2">
            <a href="#projects">
              Projects
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;