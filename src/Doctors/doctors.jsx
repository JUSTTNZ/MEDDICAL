import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fb from "../images/fb1.png";
import ig from "../images/ig1.png";
import inl from "../images/in1.png";
import img from "../images/doc1.png";
import img1 from "../images/doc2.png";
import img2 from "../images/doc3.png";

const doctors = [
  { id: 1, name: "Doctor A", specialty: "Neurology", img: img },
  { id: 2, name: "Doctor B", specialty: "Cardiology", img: img1 },
  { id: 3, name: "Doctor C", specialty: "Pediatrics", img: img2 },
  { id: 4, name: "Doctor D", specialty: "Orthopedics", img: img },
  { id: 5, name: "Doctor E", specialty: "Dermatology", img: img1 },
];

export const Doctors = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = doctors.length;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (_, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideCount);
    }, 3000);
    return () => clearInterval(interval);
  }, [slideCount]);

  return (
    <div className="bg-background p-10">
      <div className="container mx-auto">
        <h2 className="text-primary font-bold text-center text-3xl mb-6">
          Meet Our Doctors
        </h2>
        <Slider {...settings}>
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4"
            >
              <img
                src={doctor.img}
                alt={doctor.name}
                className="w-full h-30 object-cover  rounded-lg"
              />
              <h3 className="text-primary text-lg font-semibold mt-4">
                {doctor.name}
              </h3>
              <p className="text-secondary text-sm">{doctor.specialty}</p>
              <div className="flex gap-2 mt-4">
                <img src={fb} alt="Facebook" className="w-6 h-6" />
                <img src={ig} alt="Instagram" className="w-6 h-6" />
                <img src={inl} alt="LinkedIn" className="w-6 h-6" />
              </div>
              <button className="mt-4 w-full py-2 bg-tertiary text-primary font-semibold rounded">
                View Profile
              </button>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
