// Package imports
import { useState, useEffect } from "react";

// Component Imports
import data from "../../assets/projectDetails.json";
import { Heading, Project } from "../components/exports";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(data);
  }, []);

  return (
    <div className="w-full md:w-5/6 h-screen sm:mt-28 p-5 mx-auto flex flex-col gap-10 ">
      <Heading text="Projects" />
      <div className="w-full flex items-start gap-10 flex-wrap">
        {projects.map((project, index) => (
          <Project
            key={index}
            stack={project.stack}
            repo={project.repo}
            live={project.live}
            title={project.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
