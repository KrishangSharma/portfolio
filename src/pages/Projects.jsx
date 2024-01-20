// Package imports
import { useState, useEffect } from "react";

// Component Imports
import data from "../../assets/projectDetails.json";
import { Project } from "../components/exports";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(data);
  }, []);

  return (
    <div className="w-5/6 mx-auto py-16 flex flex-col gap-10 ">
      <h1 className="text-4xl font-bold">
        <span className="text-primary">Projects</span>
      </h1>
      <div className="w-full flex flex-col items-center md:flex-row gap-8 md:flex-wrap">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            stack={project.stack}
            repo={project.repo}
            live={project.live}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
