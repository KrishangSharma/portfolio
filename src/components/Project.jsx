import PropTypes from "prop-types";

const Project = ({ stack, title, repo, live }) => {
  return (
    <div className="bg-text-800 p-5 rounded-md flex flex-col gap-2 max-w-sm ">
      <h2 className="text-2xl font-semibold text-accent-500 ">{title}</h2>
      <p className="text-sm text-text-200">{stack}</p>
      <div className="flex gap-4">
        <a
          href={repo}
          target="_blank"
          rel="noreferrer noopener"
          className="underline text-gray hover:text-accent transition "
        >
          Github
        </a>
        <a
          href={live}
          target="_blank"
          rel="noreferrer noopener"
          className={` ${
            live === null ? "hidden" : " "
          } underline text-gray hover:text-accent transition`}
        >
          Live Preview
        </a>
      </div>
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
};
