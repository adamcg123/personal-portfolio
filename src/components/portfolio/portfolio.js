import React from "react";
import project1 from "../../images/project1.jpg"
import project2 from "../../images/project2.jpg"
import project3 from "../../images/project3.jpg"
import project4 from "../../images/project4.jpg"
import project5 from "../../images/project5.jpg"

const projects = [
  {
    name: "Team Profile Generator",
    description: `The team profile generator is a command-line-input application that runs in node  and request info from the user
    about members of a engineering team and makes a HTML file displaying the info that you inputed when answering the questions`,
    image: project1,
    link: "https://adamcg123.github.io/team-profile-generator/dist/team.html",
    link2: "https://github.com/adamcg123/team-profile-generator"
  },
  {
    name: "Note Taker",
    description: `It is a note taker that allows you to take notes, delete notes and have them  stored in local storage so they are saved even if your browser is closed`,
    image: project2,
    link: "https://adams-note-taker1.herokuapp.com/",
    link2: "https://github.com/adamcg123/note-taker"
  },
  {
    name: "Budget  Tracker",
    description: `This is a pwa that allows users to track their expenses and budget without a connection and all data that was submited offline gets stored and transferred when the user comes online again`,
    image: project3,
    link: "https://adams-budget-tracker.herokuapp.com/",
    link2: "https://github.com/adamcg123/budget-tracker"

  },
  {
    name: "Restaurant Search",
    description: "This project allows the user to enable location services and find restaurants in the area and it will give them the name, address, rating and a price scale. Also, allows the user to see the current weather to see if they would like to sit on the patio or not",
    image: project4,
    link: "https://glanctot.github.io/restaurant-search/",
    link2: "https://github.com/glanctot/restaurant-search"
  },
  {
    name: "Code Quiz",
    description: "It is a timed quiz that is about anything and the quiz has a total of 120 seconds and for each question that you get wrong it subtracts 10 seconds from the remaining time. This quiz also has a leader board that keeps your score even after you close that page and come back to it.",
    image: project5,
    link: "https://adamcg123.github.io/code-quiz/",
    link2: "https://github.com/adamcg123/code-quiz"
  }
];

function Portfolio() {
  return (
    <section id="projects">
      <h1>Some Of My Work</h1>
      {projects.map((project, i) => (
        <div class="card" >
          <div>
            <img src={project.image} alt={project.image} />
          </div>
          <div class="card-body">
            <h5 class="card-title">{project.name}</h5>
            <p class="card-text">{project.description}</p>
            <a href={project.link} class="btn btn-primary">Go to project</a>
            <a href={project.link2} class="btn btn-primary">Go to Repo</a>
          </div>
        </div>
      ))}
    </section>
  )
};

export default Portfolio;
