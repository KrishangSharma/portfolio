// Components Import
import axios from "axios";
import { useState, useEffect } from "react";
import { BlogCard } from "../components/exports";

const BlogContainer = () => {
  const [blogs, setBlogs] = useState([]);
  const serverURL = import.meta.env.VITE_SERVER_URL;
  const secret = import.meta.env.VITE_API_SECRET;

  // Make a get request to the server
  useEffect(() => {
    async function getBlogs() {
      const response = await axios.get(`${serverURL}/get/all`, {
        headers: {
          "api-key": secret,
        },
      });
      setBlogs(response.data.blogs);
    }

    getBlogs();
  }, []);

  return (
    <div className="w-full my-10 blog-container ">
      <div className="px-3 md:w-4/6 md:px-0 mx-auto flex flex-col gap-10">
        <h1 className="text-4xl font-bold">
          <span className="text-primary">Recent</span> Blogs
        </h1>
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            title={blog.title}
            id={blog._id}
            dateAdded={blog.createdAt}
            desc={blog.description}
            content={blog.content}
            images={blog.images}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogContainer;
