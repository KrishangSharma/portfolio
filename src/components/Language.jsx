import PropTypes from "prop-types";

const Language = ({ logo }) => {
  return <img src={logo} className="w-14 h-14" alt="Language Logo" />;
};

export default Language;

// Prop Validations
Language.propTypes = {
  logo: PropTypes.object.isRequired,
};
