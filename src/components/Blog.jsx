// Module Imports
import PropTypes from "prop-types";

const Blog = ({ title, content, images }) => {
  const replacedContent = replaceImgPlaceholders(content, images);

  return (
    <div className="w-full px-2 md:w-4/6 mx-auto my-10">
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: replacedContent }}></div>
    </div>
  );
};

// Function to replace {IMG} placeholders with <img> tags
function replaceImgPlaceholders(content, images) {
  return images.reduce((updatedContent, imgUrl, index) => {
    const imgTag = `<img src="${imgUrl}" alt="Image ${index + 1}">`;
    return updatedContent.replace(`{IMG}`, imgTag);
  }, content);
}

export default Blog;

// Prop Validations
Blog.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
};
