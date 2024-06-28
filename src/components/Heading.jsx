import PropTypes from "prop-types";

const Heading = ({ text }) => {
  return (
    <div>
      <h2 className="text-3xl relative lg:text-5xl font-semibold text-text-50">
        {text}
        <div className="w-24 h-1 bg-accent-500 rounded-full mt-1"></div>
      </h2>
    </div>
  );
};

export default Heading;

Heading.propTypes = {
  text: PropTypes.string,
};
