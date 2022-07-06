import React, { useState } from "react";
import About from "./components/about/about";
import Nav from "./components/Nav/Nav";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";


function App() {
  const [categories] = useState([
    // { name: 'about', description: '' },
    // { name: 'contact', description: '' },
    // { name: 'projects', description: '' }
  ])

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

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
