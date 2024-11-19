import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ReactStars from "react-rating-stars-component";
const CustomarReview = () => {
  const reviews = [
    {
      id: 1,
      name: "Alice Johnson",
      review:
        "This adventure was absolutely thrilling! The guides were professional, and the views were breathtaking. Highly recommend!",
      rating: 5,
      date: "2024-11-15",
      image: "https://i.ibb.co.com/TBMv8m1/Alice-Johnson.jpg",
    },
    {
      id: 2,
      name: "Robert Smith",
      review:
        "Great experience overall. However, the group size was a bit larger than expected. Still, it was very well organized.",
      rating: 4,
      date: "2024-11-12",
      image: "https://i.ibb.co.com/27vvvCj/Robert-Smith.jpg",
    },
    {
      id: 3,
      name: "Emily Davis",
      review:
        "I loved every moment of it! The eco-friendly initiatives were impressive, and the included items made the trip stress-free.",
      rating: 5,
      date: "2024-11-10",
      image: "https://i.ibb.co.com/xm929YK/Emily-Davis.jpg",
    },
    {
      id: 4,
      name: "Michael Brown",
      review:
        "The adventure was fun, but I felt the duration could have been extended to enjoy the activities more.",
      rating: 4,
      date: "2024-11-08",
      image: "https://i.ibb.co.com/CvkQB1J/Michael-Brown.jpg",
    },
    {
      id: 5,
      name: "Sophia Wilson",
      review:
        "It was an okay experience. The location was nice, but the special instructions were not clear beforehand.",
      rating: 3,
      date: "2024-11-05",
      image: "https://i.ibb.co.com/3WCsBH9/Sophia-Wilson.jpg",
    },
    {
      id: 6,
      name: "Daniel Martinez",
      review:
        "An unforgettable adventure! The team was amazing, and the activities were well-planned. Can’t wait for the next trip!",
      rating: 5,
      date: "2024-11-17",
      image: "https://i.ibb.co.com/wgQ1qh6/Daniel-Martinez.jpg",
    },
  ];
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    
      <div className="py-12 pb-20 bg-gray-100">
        <div className="w-10/12  mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Customer Reviews</h2>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
                key={review.id}
                className="bg-white shadow-lg rounded-lg p-6 text-left"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{review.name}</h3>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{review.review}</p>
                <div>
                  <ReactStars
                    count={5}
                    value={review.rating}
                    size={24}
                    edit={false}
                    activeColor="#ffd700"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
   
  );
};

export default CustomarReview;
