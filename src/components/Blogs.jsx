/* eslint-disable react/prop-types */
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Blogs = ({ blog }) => {
  const { title, author, date, content, image, tags, likes } = blog;
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div>
      <div
        data-aos="zoom-in-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="card rounded-xl flex-row w-full bg-base-100 shadow-xl p-4"
      >
        <figure
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="w-1/2"
        >
          <img
            src={image}
            alt={title}
            className=" rounded-xl w-full h-full object-cover"
          />
        </figure>
        <div
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="card-body w-1/2"
        >
          <h2 className="card-title text-xl font-bold text-blue-500">
            {title}
          </h2>
          <p className="text-sm text-gray-500">
            By <span className="font-semibold">{author}</span> on {date}
          </p>
          <p className="text-gray-700 mt-2">{content}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="badge badge-primary badge-outline text-xs py-1 px-2"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="card-actions mt-4 justify-end">
            <span className="text-sm text-gray-600">❤️ {likes} Likes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
