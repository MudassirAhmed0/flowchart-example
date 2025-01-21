"use client";
import Lottie from "react-lottie-player";
import HeroOverlay from "./HeroOverlay";
import HeroVideoAndImage from "./HeroVideoAndImage";
import json from "../../../public/json/scroll.json";

const Hero = ({ en, img, videoData, title, desc, alt, mobImage }) => {
  const handleClick = () => {
    window.scrollBy(0, window.innerHeight);
  };
  return (
    <section className="h-screen relative flex items-end md:items-center">
      <HeroVideoAndImage
        img={img}
        videoData={videoData}
        alt={alt}
        mobImage={mobImage}
        title={title}
      />
      <HeroOverlay />
      <div className="myContainer relative text-white pb-[15vh] md:pb-[40px]">
        <h1 data-aos="fade-up" className="heading1">
          {title}
        </h1>
        <p
          data-aos="fade-down"
          className="para24 mt-[16px] md:mt-[0.625vw] md:w-[52.2395833333vw]"
        >
          {desc}
        </p>
      </div>
      <Lottie
        onClick={handleClick}
        loop
        animationData={json}
        play
        className="w-[40px] cursor-pointer h-[40px] md:w-[3.2vw] md:h-[3.2vw] absolute bottom-[16px] md:bottom-[2vw] left-[50%] transform translate-x-[-50%]"
      />
    </section>
  );
};

export default Hero;
