import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const Banner = () => {
  const slides = [
    {
      image:
        "https://i.ibb.co.com/0qqhXXp/jannes-jacobs-KRIGA7i-UN08-unsplash.jpg",
      title: "Mountain Trekking",
      description:
        "Embark on an adventurous journey through majestic peaks and rugged trails. Breathe in the fresh mountain air as you conquer new heights and marvel at breathtaking views that redefine serenity.",
      buttonText: "Join With Us",
      buttonLink: "#join-with-us",
    },
    {
      image:
        "https://i.ibb.co.com/v1DXDLx/carl-cerstrand-nygh-APu-JQC8-unsplash.jpg",
      title: "Ocean Diving",
      description:
        "Dive deep into the azure waters and uncover a mesmerizing world of vibrant coral reefs, exotic marine creatures, and the tranquility of the ocean's embrace. A life-changing adventure awaits!",
      buttonText: "Join With Us",
      buttonLink: "#join-with-us",
    },
    {
      image: "https://i.ibb.co.com/LQKf5qN/samed-rh-QARw-Li-OYE-unsplash.jpg",
      title: "Forest Expedition",
      description:
        "Step into the wild and experience the untamed beauty of dense forests. Listen to the melodies of nature, explore hidden trails, and reconnect with the earth in its purest form.",
      buttonText: "Join With Us",
      buttonLink: "#join-with-us",
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
            <p className="text-lg mx-20 text-center mb-4">
              {slide.description}
            </p>
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
