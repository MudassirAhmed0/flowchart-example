"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import FsLightbox from "fslightbox-react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperButtons2 from "../common/SwiperButtons2";
import SwiperButtons3 from "../common/SwiperButtons3";
import { Autoplay } from "swiper/modules";
import dynamic from "next/dynamic";
const MyLightBox = dynamic(() => import("../common/MyLightBox/Index"));

const CommitteeSwiperCards = [
  {
    img: "/images/be-careful/committee/1.jpg",
  },
  {
    img: "/images/be-careful/committee/2.jpg",
  },
  {
    img: "/images/be-careful/committee/3.jpg",
  },
  {
    img: "/images/be-careful/committee/4.jpg",
  },
  {
    img: "/images/be-careful/committee/5.jpg",
  },
  {
    img: "/images/be-careful/committee/6.jpg",
  },
  {
    img: "/images/be-careful/committee/7.jpg",
  },
];
// const sources = [
//   "https://www.youtube.com/embed/UHlN_24E0V8?rel=0",
//   "https://www.youtube.com/embed/YXHEQuuUroY?rel=0",
//   "https://www.youtube.com/embed/3vaX4PJc2X0?rel=0",
//   "https://www.youtube.com/embed/-k-8wPFjv6c?rel=0",
//   "https://www.youtube.com/embed/Ztei4vnFzzg?rel=0",
//   "https://www.youtube.com/embed/i1514-lcvcs?rel=0",
//   "https://www.youtube.com/embed/HBBhx4ZlZNk?rel=0",
// ];
// const sources = [
//   { type: "youtube", source: "UHlN_24E0V8" },
//   { type: "youtube", source: "YXHEQuuUroY" },
//   { type: "youtube", source: "3vaX4PJc2X0" },
//   { type: "youtube", source: "-k-8wPFjv6c" },
//   { type: "youtube", source: "Ztei4vnFzzg" },
//   { type: "youtube", source: "i1514-lcvcs" },
//   { type: "youtube", source: "HBBhx4ZlZNk" },
// ];
// CommitteeSwiperCards.forEach((card) => sourcesOfImages.push(card.img));

const CommitteeSwiper = ({ en, title, cards }) => {
  const [swiper, setSwiper] = useState(null);
  const [toggler, setToggler] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [swiperGap, setSwiperGap] = useState(0);
  const [sources, setSources] = useState([]);

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

  useEffect(() => {
    let newSources = [];
    cards.forEach((card) => {
      if (card?.your_care_has_youtube) {
        newSources.push({
          type: "youtube",
          source: card?.your_care_youtube_link,
        });
      } else {
        newSources.push({
          type: "video",
          source: card?.your_care_video_file?.permalink,
        });
      }
    });
    setSources(newSources);
  }, [cards]);

  useEffect(() => {
    setSwiperGap(
      window.innerWidth > 768 ? (window.innerWidth / 100) * 1.66666666667 : 24
    );
  }, [slideIndex]);
  return (
    <div className="md:py-[9.375vw] py-[80px]">
      <div className="w-[90vw] md:w-[90%] mx-[auto] text-center ">
        <h3
          data-aos-anchor="subPagePara"
          data-aos="fade-up"
          className="text-[#000] heading2"
        >
          {title}
        </h3>
      </div>

      <div className={` md:pt-[3.75vw] pt-[40px]`}>
        {swiperGap == 0 || (
          <div
            data-aos="fade"
            className="relative  mx-auto md:w-[85.4166666667vw] flex justify-center becarfeul__Swipers swiper-rtl"
          >
            <Swiper
              onSwiper={(s) => setSwiper(s)}
              spaceBetween={swiperGap}
              modules={[Autoplay]}
              autoplay={{
                delay: 6000,
                disableOnInteraction: true,
              }}
              slidesPerView={"auto"}
              className={`  w-[80vw]  md:w-[69.5833333333vw] becarfeul__Swipers`}
            >
              {cards?.map((card, index) => (
                <SwiperSlide
                  key={index}
                  className="md:w-[22.0833333333vw] md:h-[16.6666666667vw]
                                w-[80vw] h-[250px]"
                >
                  <div
                    onClick={() => {
                      handleOpen();
                      setSlideIndex(index);
                    }}
                    className="w-full h-full  flex items-center justify-center relative cursor-pointer"
                  >
                    <img
                      src={card?.your_care_video_thumb?.src}
                      alt={
                        card?.your_care_video_thumb?.alt
                          ? card?.your_care_video_thumb?.alt
                          : title
                      }
                      className="absolute object-cover w-full h-full"
                      loading="lazy"
                    />
                    <span className="w-full h-full top-0 left-0 bg-[#000000] opacity-[0.3] absolute"></span>

                    <div className="md:w-[4.16666666667vw] md:h-[4.16666666667vw]  w-[30px] h-[30px] relative">
                      <Image src="/images/icons/play.svg" fill alt="play" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {swiper && <SwiperButtons3 disable swiper={swiper} en={en} />}
          </div>
        )}
      </div>

      {showLightBox && (
        <MyLightBox
          isAr={!en}
          slideNo={slideIndex}
          autoPlay
          showNow={showNow}
          setShowNow={setShowNow}
          sources={sources}
        />
      )}
    </div>
  );
};

export default CommitteeSwiper;
