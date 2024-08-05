"use client";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper";
import { sliderData } from "../../data";

export default function Home3Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Swiper
        spaceBetween={2}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        className="custom-class"
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        fadeEffect={{
          crossFade: true,
        }}
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.backgroundImage})` }}
              ></div>
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="relative z-10 flex h-full items-center justify-center p-8 text-center text-white">
                <div className="max-w-3xl">
                  <h3 className="text-3xl font-bold mb-4">{slide.title}</h3>
                  <p className="mb-8">{slide.description}</p>
                  <div className="flex justify-center space-x-4">
                    <Link
                      href="/services"
                      className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-700"
                    >
                      Discover Industify
                    </Link>
                    <button
                      className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-600"
                      onClick={() => setIsOpen(true)}
                    >
                      <span className="icon"></span>
                      <span className="ml-2">Watch Video</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <ModalVideo
        channel="youtube"
        autoplay={true}
        isOpen={isOpen}
        videoId="3j3SQEUfREs"
        animationSpeed={300}
        onClose={() => setIsOpen(false)}
        modalVideoClose="mfp-close"
      />
    </>
  );
}
