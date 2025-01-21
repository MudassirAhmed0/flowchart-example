"use client";
import React, { useEffect, useRef } from "react";
import { useSwiper } from "swiper/react";

const SwiperButtons = ({ disable }) => {
  const swiper = useSwiper();
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);
  const handleDisable = (element) => {
    element
      .querySelectorAll([".swiper-button-prev", ".swiper-button-next"])
      .forEach(
        (btn) =>
          btn.classList.contains("chomu") &&
          btn.classList.remove("swiper-button-disabled")
      );
    element.querySelectorAll(".swiper-button-disabled").forEach((button) => {
      if (!button.classList.contains("chomu")) {
        if (button.classList.contains("swiper-button-next")) {
          element.querySelectorAll(".swiper-button-next").forEach((btn) => {
            btn.classList.add("swiper-button-disabled");
          });
        } else if (button.classList.contains("swiper-button-prev")) {
          element.querySelectorAll(".swiper-button-prev").forEach((btn) => {
            btn.classList.add("swiper-button-disabled");
          });
        }
      }
    });
  };

  useEffect(() => {
    if (!disable) {
      handleDisable(nextButtonRef.current.parentElement);
    }
  }, []);

  const handleSlideChange = () => {
    if (!disable) {
      handleDisable(nextButtonRef.current.parentElement);
    }
  };
  useEffect(() => {
    swiper.on("slideChange", handleSlideChange);
    return () => {
      swiper.off("slideChange", handleSlideChange);
    };
  }, [swiper, handleSlideChange]);
  const handleNext = (event) => {
    swiper.slideNext();
    if (!disable) {
      handleDisable(event.target.parentElement.parentElement);
    }
  };
  const handlePrev = (event) => {
    swiper.slidePrev();
    if (!disable) {
      handleDisable(event.target.parentElement.parentElement);
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
        className="swiper-button-next chomu "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-[28px] h-[28px] md:w-[2.5vw] md:h-[2.5vw] cursor-pointer transition duration-500 md:hover:opacity-[0.7] `}
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
            fill="#4FE0A3"
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
        className="swiper-button-prev chomu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-[28px] h-[28px] md:w-[2.5vw] md:h-[2.5vw] cursor-pointer transition duration-500 md:hover:opacity-[0.7] `}
          viewBox="0 0 72 72"
          fill="none"
        >
          <rect width="72" height="72" rx="36" fill="#4FE0A3" />
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

export default SwiperButtons;
