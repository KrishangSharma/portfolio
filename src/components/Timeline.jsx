// Package Imports
import { useState, useEffect } from "react";
// Components Import
import TimelineItem from "./TimelineItem.jsx";
import data from "../../assets/projects.json";
import Heading from "./Heading.jsx";

const Timeline = () => {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    setProjectData(data);
  }, []);

  return (
    <div className="w-full md:w-5/6 mx-auto mb-20 flex flex-col gap-10 p-5">
      <Heading text="Work Experience" />
      {/* Timeline */}

      <ol className="relative border-s-2 border-accent-500 flex flex-col gap-10 pb-4 ">
        {projectData.map((project, index) => (
          <TimelineItem
            key={index}
            date={project.date}
            title={project.title}
            stack={project.stack}
          />
        ))}
      </ol>
    </div>
  );
};

export default Timeline;
