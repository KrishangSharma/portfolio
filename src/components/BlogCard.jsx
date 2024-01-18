// Module Imports
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BlogCard = ({ title, desc, dateAdded, id }) => {
  const timestamp = dateAdded;
  const dateObject = new Date(timestamp);

  const formattedDate = `${dateObject.getUTCDate()}-${(
    dateObject.getUTCMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${dateObject.getUTCFullYear().toString().slice(-2)}`;

  return (
    <div className="blog-card">
      <div className="w-full flex items-center justify-between">
        <Link to={`blog/${id}`} className="text-2xl font-semibold text-accent">
          {title}
        </Link>
        <span className="text-gray">{formattedDate}</span>
      </div>
      <p>{desc}</p>
    </div>
  );
};

export default BlogCard;

// Prop Validations
BlogCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  dateAdded: PropTypes.instanceOf(Date).isRequired,
};
