import PropTypes from "prop-types";

const Project = ({ stack, title, repo, live }) => {
  return (
    <div className="bg-elevation p-2 rounded-md flex flex-col gap-2 max-w-xs ">
      <h2 className="text-2xl font-semibold ">{title}</h2>
      <p className="text-sm text-gray">{stack}</p>
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
