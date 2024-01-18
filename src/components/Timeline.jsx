// Package Imports
import { useState, useEffect } from "react";
// Components Import
import TimelineItem from "./TimelineItem.jsx";
import data from "../../assets/projects.json";

const Timeline = () => {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    setProjectData(data);
  }, []);

  return (
    <div className="w-5/6 mx-auto mb-20 flex flex-col gap-10">
      <h1 className="text-4xl font-bold">Experience Timeline</h1>
      {/* Timeline */}

      <ol className="relative border-s-2 border-accent flex flex-col gap-10 pb-5 ">
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
