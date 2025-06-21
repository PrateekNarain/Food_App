import React from "react";
import { Quote, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Emily Johnson",
      rating: 5,
      text: "The flavors at this restaurant are absolutely incredible! Every dish I've tried has been a delightful experience.",
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 4,
      text: "Great food and excellent service. The staff was very attentive and knowledgeable about the menu.",
    },
    {
      id: 3,
      name: "Sarah Thompson",
      rating: 5,
      text: "This place is a hidden gem! The attention to detail in both the food presentation and taste is remarkable.",
    },
    {
      id: 4,
      name: "David Rodriguez",
      rating: 5,
      text: "I've been to many restaurants, but this one stands out. The food are all top-notch.",
    },
    {
      id: 5,
      name: "Lisa Patel",
      rating: 4,
      text: "A wonderful dining experience! The fusion of flavors in their signature dishes is truly unique and delightful.",
    },
  ];

  return (
    <div className="py-10 bg-gray-50">
      <h1 className="text-center text-4xl font-bold mb-8">
        What our customers say
      </h1>
      <div className="max-w-6xl mx-auto px-3">
        <Swiper
          style={{
            "--swiper-pagination-color": "#EF4444",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "10px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          }}
          modules={[Pagination, Autoplay]}
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          className="mySwiper !pb-12" // push dots away from cards
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full min-h-[200px] flex flex-col justify-between shadow-orange-500 border border-black">
                {/* Stars */}
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      fill={i < item.rating ? "black" : "none"}
                      stroke="black"
                      className="w-5 h-5"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-700 mb-6">{item.text}</p>

                {/* Footer */}
                <div className="flex justify-between items-center mt-auto">
                  <div>
                    <h3 className="font-semibold text-red-500 text-lg">
                      {item.name}
                    </h3>
                    <p className="text-sm mt-1 text-gray-500">
                      CEO, Webelite Builders
                    </p>
                  </div>
                  <Quote className="text-red-400 w-6 h-6" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
