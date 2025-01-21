import Image from "next/image";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperButtons from "../common/SwiperButtons";

const LeadersInfo = ({ en, setSwiperInstance, leaders, isOpen, setIsOpen }) => {
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full  bg-white z-[55] flex items-center justify-center transition duration-[800ms] ${
        isOpen ? " opacity-[1] " : " opacity-[0] pointer-events-none"
      }`}
    >
      <img
        src="/images/icons/close.svg"
        alt="CLose svg"
        onClick={handleClose}
        className={`w-[30px] md:w-[2.5vw] z-[10] cursor-pointer md:h-[2.5vw] top-[3.33333333333vw] absolute ${
          en ? " right-[3.33333333333vw] " : " left-[3.33333333333vw] "
        }`}
      />

      <Swiper
        onSwiper={(s) => setSwiperInstance(s)}
        navigation={true}
        modules={[Navigation]}
        className="swiper infoSwiper  w-full md:w-[86.3541666667vw]"
        slidesPerView={1}
      >
        {leaders.map((leader, index) => (
          <SwiperSlide
            key={index}
            className="flex px-[5vw] md:px-[10vw] max-h-[100vh] overflow-y-scroll md:overflow-hidden py-[80px] md:py-0 items-center gap-y-[32px] gap-x-[2.39583333333vw] flex-wrap md:flex-nowrap"
          >
            <div className="relative w-full md:min-w-[20.1041666667vw] md:w-[20.1041666667vw] userSelectNone h-[370px] md:h-[21.875vw]">
              <img
                src={leader?.team_members_image?.src}
                className="object-cover w-full h-full"
                alt={
                  leader?.team_members_image?.alt
                    ? leader?.team_members_image?.alt
                    : leader?.team_members_name
                }
                loading="lazy"
              />
            </div>
            <div>
              <h4 className="heading4 text-[#244A54]">
                {leader?.team_members_name}
              </h4>
              <p className="para24 text-[#4FE0A3] font-[700] mb-[16px] md:mb-[1.25vw] mt-[4px] md:mt-[0.3vw]">
                {leader?.team_members_position}
              </p>
              <div
                dangerouslySetInnerHTML={{ __html: leader?.team_members_bio }}
                className="para24 font-[400] text-[#4A4A4A] flex flex-col gap-y-[12px] md:gap-y-[1.25vw]"
              ></div>
            </div>
          </SwiperSlide>
        ))}
        <SwiperButtons />
      </Swiper>
    </div>
  );
};

export default LeadersInfo;
