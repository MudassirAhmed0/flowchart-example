"use client";
import Image from "next/image";
import Button from "../common/Button";
import CampaignVideo from "./CampaignVideo";
import { useState } from "react";
import FsLightbox from "fslightbox-react";
import dynamic from "next/dynamic";
const MyLightBox = dynamic(() => import("../common/MyLightBox/Index"));

const Campaign = ({
  en,
  title,
  desc,
  linkLabel,
  link,
  backgroundVideo,
  videoData: { hasVideo, cover, hasYoutubeVideo, video, youtubeVideo },
}) => {
  // console.log(youtubeVideo);
  const [toggler, setToggler] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [showLightBox, setShowLightBox] = useState(false);
  const [showNow, setShowNow] = useState(false);

  const handleOpen = () => {
    setShowLightBox(true);
    if (!showLightBox) {
      setTimeout(() => {
        const container = document.querySelector(".lightboxContainer");
        container.classList.remove("opacity-0");
        container.classList.remove("pointer-events-none");
        setShowNow(true);
      }, 1500);
    } else {
      const container = document.querySelector(".lightboxContainer");
      container.classList.remove("opacity-0");
      container.classList.remove("pointer-events-none");
      setTimeout(() => {
        setShowNow(true);
      }, 1500);
    }
  };
  function getYouTubeVideoId(url) {
    // Regular expression to match the video ID
    var regExp =
      /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);

    if (match && match[2].length === 11) {
      // If a match is found and the ID is exactly 11 characters long (YouTube video ID length)
      return match[2];
    } else {
      // If no match is found or the ID is not 11 characters long
      console.error("Invalid YouTube URL");
      return null;
    }
  }
  return (
    <section className="md:h-[48.9583333333vw] pb-[60px] pt-[240px] md:py-0 relative text-white flex items-center">
      <CampaignVideo backgroundVideo={backgroundVideo} />
      <div className="flex items-center myContainer justify-between relative">
        <div className="">
          <h2 data-aos="fade-up" className="heading2 relative">
            {title}
          </h2>
          <div
            dangerouslySetInnerHTML={{ __html: desc }}
            data-aos="fade-down"
            className=" mb-[32px] mt-[12px] md:mb-[3.75vw] md:mt-[1.66666666667vw] para24 flex flex-col gap-y-[8px] md:gap-y-[1.25vw] md:w-[33.3333333333vw]"
          ></div>
          <Button text={linkLabel} href={link} />
        </div>
        {hasVideo && (
          <div
            data-aos="fade"
            data-aos-delay="400"
            onClick={() => {
              handleOpen();
              // setToggler(!toggler);
              // setSlideIndex(0);
            }}
            className="md:w-[34.84375vw] hidden md:flex cursor-pointer relative h-[30.625vw]  items-center justify-center"
          >
            <img
              src={cover}
              className="absolute object-cover w-full h-full"
              alt={title}
              loading="lazy"
            />
            <span className="w-full h-full top-0 left-0 bg-black opacity-[0.3] absolute"></span>

            <div className="w-[5.3125vw] h-[5.3125vw] relative ">
              <Image src="/images/icons/play.svg" fill alt="play" />
            </div>
          </div>
        )}
      </div>

      {showLightBox && (
        <MyLightBox
          isAr={!en}
          sources={[
            {
              type: hasYoutubeVideo ? "youtube" : "video",
              source: hasYoutubeVideo ? getYouTubeVideoId(youtubeVideo) : video,
            },
          ]}
          slideNo={0}
          autoPlay
          showNow={showNow}
          setShowNow={setShowNow}
        />
      )}
    </section>
  );
};

export default Campaign;
