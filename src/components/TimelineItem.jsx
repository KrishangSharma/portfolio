import PropTypes from "prop-types";

const TimelineItem = ({ date, title, stack }) => {
  return (
    <li className="ms-4 ">
      <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -start-1.5 border-accent-500 border-2 "></div>
      <time className="mb-1 text-sm leading-none text-text-300">{date}</time>
      <h2 className="text-primary my-2 text-3xl font-semibold text-text-50 ">
        {title}
      </h2>
      <p className="text-text-300">
        <b>Tech Stack: </b>
        {stack}
      </p>
    </li>
  );
};

export default TimelineItem;

// Prop Validations
TimelineItem.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  stack: PropTypes.string.isRequired,
};
