import PropTypes from "prop-types";

const Project = ({ title, stack, repo, live }) => {
  return (
    <div className=" w-full gap-4 md:w-80 md:h-36 md:gap-0 p-2 border-2 border-accent rounded-md bg-black flex flex-col justify-between">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <span className="text-xs">Tech Stack: {stack}</span>
      <div className="w-2/3 md:w-full flex items-center gap-4 ">
        <a href={repo} target="_blank" rel="noopener noreferrer">
          <span className="text-sm underline ">Github Repo</span>
        </a>
        <a href={live} target="_blank" rel="noopener noreferrer">
          <span className="text-sm underline">Live Preview</span>
        </a>
      </div>
    </div>
  );
};

export default Project;

// Prop Validations
Project.propTypes = {
  title: PropTypes.string.isRequired,
  stack: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
  live: PropTypes.string.isRequired,
};
