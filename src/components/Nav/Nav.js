import React from "react";



function Nav() {

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          Adam G
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about">
              About me
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="contact" href="#contact">
              Contact
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="projects" href="#projects">
              Projects
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;