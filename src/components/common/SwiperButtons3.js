"use client";
import React, { useEffect, useRef } from "react";

const SwiperButtons3 = ({ en, swiper, disable }) => {
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  function handleDisable() {
    const isFirstSlide = swiper.activeIndex === 0;
    const isLastSlide = swiper.activeIndex === swiper.slides.length - 3;
    const prevButton = prevButtonRef.current;
    const nextButton = nextButtonRef.current;
    if (prevButton) {
      if (isFirstSlide) {
        prevButton.classList.add("swiper-button-disabled");
      } else {
        prevButton.classList.remove("swiper-button-disabled");
      }
    }

    if (nextButton) {
      if (isLastSlide) {
        nextButton.classList.add("swiper-button-disabled");
      } else {
        nextButton.classList.remove("swiper-button-disabled");
      }
    }
  }

  const handleSlideChange = () => {
    if (!disable) {
      handleDisable();
    }
  };
  useEffect(() => {
    if (!disable) {
      handleDisable();
    }
  }, []);
  useEffect(() => {
    swiper.on("slideChange", handleSlideChange);
    return () => {
      swiper.off("slideChange", handleSlideChange);
    };
  }, [swiper, handleSlideChange]);
  const handleNext = (event) => {
    swiper.slideNext();
    if (!disable) {
      handleDisable();
    }
  };
  const handlePrev = (event) => {
    swiper.slidePrev();
    if (!disable) {
      handleDisable();
    }
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
          className={`  w-full h-full cursor-pointer transition duration-500 md:hover:opacity-[0.7] `}
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
        onClick={handlePrev}
        ref={prevButtonRef}
        className="swiper-button-prev flip w-[30px] h-[30px] md:w-[4.16666666667vw] md:h-[4.16666666667vw]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`  w-full h-full cursor-pointer transition duration-500 md:hover:opacity-[0.7] `}
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

export default SwiperButtons3;
