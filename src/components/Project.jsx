import PropTypes from "prop-types";

const Project = ({ stack, title, repo, live, img }) => {
  return (
    <div className="max-w-xl h-32 flex items-start justify-between rounded-md bg-elevation p-2 rounded-sm md:p-0 md:gap-4 border overflow-hidden">
      <aside className="hidden md:block md:max-w-3/6 h-full">
        <img src={img} alt="Project Title" className="w-full h-auto" />
      </aside>
      <aside className="w-full h-full flex flex-col justify-between">
        <p className="text-2xl font-bold">{title}</p>
        <p className="text-sm text-gray">{stack}</p>
        <div className="flex gap-4">
          <a
            href={repo}
            target="_blank"
            rel="noopnener noreferrer"
            className="underline hover:text-accent"
          >
            Github
          </a>
          <a
            href={live}
            target="_blank"
            rel="noopnener noreferrer"
            className="underline hover:text-accent"
          >
            Live Preview
          </a>
        </div>
      </aside>
    </div>
  );
};

export default Project;

// Prop Validations
Project.propTypes = {
  stack: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
  live: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
