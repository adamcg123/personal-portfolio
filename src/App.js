import React from "react";
import About from "./components/about/about";
import Nav from "./components/Nav/Nav";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";

function App() {

  return (
    <div>
      <Nav />
      <main>
        <About />
        <Portfolio />
        <Contact />
      </main>
    </div>
  )
};

export default App;
