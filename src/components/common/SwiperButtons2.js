"use client";
import React, { useEffect, useRef } from "react";
import { useSwiper } from "swiper/react";

const SwiperButtons2 = ({ en }) => {
  const swiper = useSwiper();
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);

  const handleSlideChange = () => {
    handleDisable(nextButtonRef.current.parentElement);
  };
  useEffect(() => {
    swiper.on("slideChange", handleSlideChange);
    return () => {
      swiper.off("slideChange", handleSlideChange);
    };
  }, [swiper, handleSlideChange]);
  const handleNext = (event) => {
    swiper.slideNext();
    handleDisable(event.target.parentElement.parentElement);
  };
  const handlePrev = (event) => {
    swiper.slidePrev();
    handleDisable(event.target.parentElement.parentElement);
  };
  useEffect(() => {
    if (swiper.isEnd) {
      if (nextButtonRef.current && prevButtonRef.current) {
        nextButtonRef.current.style.display = "none";
        prevButtonRef.current.style.display = "none";
      }
      if (swiper.el.querySelector(".swiper-pagination")) {
        swiper.el.querySelector(".swiper-pagination").style.display = "none";
      }
    }
  }, [nextButtonRef, prevButtonRef]);
  return (
    <>
      <div
        ref={nextButtonRef}
        onClick={handleNext}
        className="swiper-button-next w-[30px] h-[30px] md:w-[4.16666666667vw] md:h-[4.16666666667vw] "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-full cursor-pointer transition duration-500 hover:opacity-[0.7] `}
          viewBox="0 0 72 72"
          fill="none"
        >
          <rect
            x="72"
            y="72"
            width="72"
            height="72"
            rx="36"
            transform="rotate(-180 72 72)"
            fill="#89191B"
          />
          <path
            d="M28.5 21L43.5 36L28.5 51"
            stroke="white"
            strokeWidth="4"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div
        ref={prevButtonRef}
        onClick={handlePrev}
        className="swiper-button-prev w-[30px] h-[30px] md:w-[4.16666666667vw] md:h-[4.16666666667vw]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-full cursor-pointer transition duration-500 hover:opacity-[0.7] `}
          viewBox="0 0 72 72"
          fill="none"
        >
          <rect width="72" height="72" rx="36" fill="#89191B" />
          <path
            d="M43.5 51L28.5 36L43.5 21"
            stroke="white"
            strokeWidth="4"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </>
  );
};

export default SwiperButtons2;
