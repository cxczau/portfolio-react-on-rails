import React, { useReducer, useEffect, useState } from 'react';

const App = (props) => {
  const [hoveredTechnology, setHoveredTechnology] = useState(null);

  const PROJECTS = [
    {
      name: "iStrive",
      description: "iStrive",
      technologies: ["Ruby on Rails", "React", "Redux", "PostgreSQL", "AWS"],
      url: "https://www.strivestronger.com/istrive"
    },
    {
      name: "ClinikNote",
      description: "Project 1 description",
      technologies: ["React", "NodeJS", "GraphQL", "Redux", "PostgreSQL", "AWS"],
      url: "https://cliniknote.com/"
    },
    {
      name: "Yieldtree",
      description: "Project 1 description",
      technologies: ["Ruby on Rails", "React", "Redux", "PostgreSQL", "AWS"],
      url: "https://www.aura.co/marketplace"
    },
    {
      name: "Zembl",
      description: "Project 1 description",
      technologies: ["Ruby on Rails", "Javascript", "Stimulus", "Sqlite3", "AWS"],
      url: "https://cliniknote.com/"
    },
    {
      name: "Spotto",
      description: "Spotto description",
      technologies: ["Typescript", "React", "NodeJS", "Redux", "MongoDB", "AWS"],
      url: "https://www.spotto.io/"
    },
    {
      name: "ActiveXchange",
      description: "Project 1 description",
      technologies: ["Javascript", "React", "NodeJS", "PostgreSQL", "AWS"],
      url: "https://activexchange.org/national-database"
    }
  ]

  const updateHoveredTechnology = (event) => {
    setHoveredTechnology(event.target.innerText);
  }

  return (
    <>
      <div className="row m-2">
        <div className="col-12">
          <div className="row">
            <div className="col-12">
              <h3>Projects</h3>
              <p>Hey there! Here are some projects that I have been a part of!</p>
            </div>
          </div>
          {PROJECTS.map((project, index) => (
            <div className="row mb-3" key={project.name}>
              <div className="col-12">
                <div className="row">
                  <div className="col-12">
                    <h4>{project.name}</h4>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <p>{project.description}</p>
                  </div>
                  <div className="col-12">
                    {project.technologies.map((technology, index) => (
                      <span className={`badge badge-pill badge-primary ${hoveredTechnology === technology ? 'badge-hover' : ''} mr-1 `} key={technology} onMouseEnter={updateHoveredTechnology}>{technology}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;