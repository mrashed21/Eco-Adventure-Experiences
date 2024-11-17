import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const Banner = () => {
  const slides = [
    {
      image: "https://i.ibb.co.com/v1DXDLx/carl-cerstrand-nygh-APu-JQC8-unsplash.jpg",
      title: "Mountain Trekking",
      description: "Explore the heights and enjoy breathtaking views.",
      buttonText: "Explore Now",
      buttonLink: "#",
    },
    {
      image: "https://i.ibb.co.com/0qqhXXp/jannes-jacobs-KRIGA7i-UN08-unsplash.jpg",
      title: "Ocean Diving",
      description: "Discover the wonders of underwater life.",
      buttonText: "Dive In",
      buttonLink: "#",
    },
    {
      image: "https://i.ibb.co.com/LQKf5qN/samed-rh-QARw-Li-OYE-unsplash.jpg",
      title: "Forest Expedition",
      description: "Immerse yourself in the heart of nature.",
      buttonText: "Join Now",
      buttonLink: "#",
    },
  ];

  return (
    <Swiper
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="relative">
          <div className="h-[450px]">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
            <h2 className="text-3xl font-bold mb-2">{slide.title}</h2>
            <p className="text-lg mb-4">{slide.description}</p>
            <a
              href={slide.buttonLink}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {slide.buttonText}
            </a>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
