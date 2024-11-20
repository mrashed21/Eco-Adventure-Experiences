import { useLoaderData } from "react-router-dom";
import Blogs from "./Blogs";

const BlogContainer = () => {
  const blogData = useLoaderData();
  return (
    <div className=" px-5 md:px-0 md:w-10/12 mx-auto space-y-8 ">
      {blogData.map((blog) => (
        <Blogs key={blog.id} blog={blog} > </Blogs>      ))}
    </div>
  );
};

export default BlogContainer;
