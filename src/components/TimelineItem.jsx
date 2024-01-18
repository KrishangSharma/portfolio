import PropTypes from "prop-types";

const TimelineItem = ({ date, title, stack }) => {
  return (
    <li className="ms-4 ">
      <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -start-1.5 border-accent border-2 "></div>
      <time className="mb-1 text-sm leading-none text-gray">{date}</time>
      <h2 className="text-primary my-2 text-3xl font-semibold ">{title}</h2>
      <p className="text-white">
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
