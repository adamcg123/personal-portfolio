import React from "react";
import About from "./components/about/about";
import Nav from "./components/Nav/Nav";
import Projects from "./components/Projects/projects";
import Contact from "./components/contact/contact";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  return( 
    <>
      <Header />
      <Nav />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
};

export default App;
