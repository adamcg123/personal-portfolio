import React from "react";


// import project3 from "../../assets/project3.jpg"

import IMAGES from "../../images/index1"

const projects = [
  {
    name: "Project 1",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
    consequatur magni quod nesciunt necessitatibus molestiae non
    eligendi, magnam est aliquam recusandae? Magnam soluta minus
    iste alias sunt veritatis nisi dolores!`,
    image: IMAGES.project1,
    link: "http://www.google.com"
  },
  {
    name: "Project 2",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
    consequatur magni quod nesciunt necessitatibus molestiae non
    eligendi, magnam est aliquam recusandae? Magnam soluta minus
    iste alias sunt veritatis nisi dolores!`,
    image: IMAGES.project2,
    link: "http://www.google.com"
  },
  {
    name: "Project 3",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
    consequatur magni quod nesciunt necessitatibus molestiae non
    eligendi, magnam est aliquam recusandae? Magnam soluta minus
    iste alias sunt veritatis nisi dolores!`,
    image: IMAGES,
    link: "http://www.google.com"

  },
];

function Portfolio() {
  return (
    <section id="projects">
      <h1>test project</h1>
      {projects.map((project, i) => (
        <div class="card" >
          <div>
            <img src={IMAGES} ></img>
          </div>
          <div class="card-body">
            <h5 class="card-title">{project.name}</h5>
            <p class="card-text">{project.description}</p>
            <a href={project.link} class="btn btn-primary">Go to project</a>
          </div>
        </div>
      ))}
    </section>
  )
};

export default Portfolio;
