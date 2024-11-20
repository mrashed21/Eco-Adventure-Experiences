import BlogContainer from "../components/BlogContainer";

const Blog = () => {
  return (
    <div className="bg-purple-100 pt-10 pb-20">
      <div className="px-7 flex flex-col items-center">
        <h2 className="font-medium text-center text-xl md:text-4xl md:font-semibold mb-5">
          Embark on Eco-Adventure: Explore, Conserve, Thrive
        </h2>
        <p className="text-center mb-10">
          Explore thrilling adventures while preserving nature in our
          Eco-Adventure blog.
        </p>{" "}
      </div>
      <BlogContainer></BlogContainer>
    </div>
  );
};

export default Blog;
