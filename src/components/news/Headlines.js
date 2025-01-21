"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import SwiperButtons from "../common/SwiperButtons";
import Link from "next/link";
const Headlines = ({ en, data }) => {
  const truncate = (input) => {
    if (input) {
      return input?.length > 100 ? `${input.substring(0, 90)}...` : input;
    }
  };
  return (
    <div className="flex myContainer mt-[32px] md:mt-[1.66666666667vw] mb-[80px] md:mb-[6.25vw] flex-wrap">
      <div
        className={`${
          en ? "pl-[2.86666666667vw]  " : "pr-[2.86666666667vw]  "
        }  py-[12px] md:py-[1.25vw] para22 text-center flex items-center  font-[700] bg-[#244A54] text-white w-full md:w-[10vw]`}
      >
        اخر الاخبار
      </div>

      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        autoplay={{
          delay: 8000,
          disableOnInteraction: true,
        }}
        loop={true}
        className=" swiper headlineSwiper mt-[-50px] md:mt-0 pt-[50px] md:pt-[0] w-full md:w-[75.15625vw]"
      >
        {data?.news?.data.map((item, index) => (
          <SwiperSlide
            key={index}
            className="bg-[#F0F6F5] py-[12px] md:py-[1.25vw] text-[#244A54] para22  px-[14px] md:px-[1.66666666667vw] flex items-center"
          >
            <Link
              href={en ? "/en/news/" + item.slug : "/news/" + item.slug}
              className="md:w-[88%]"
            >
              {truncate(item.title)}{" "}
            </Link>
          </SwiperSlide>
        ))}
        <SwiperButtons disable />
      </Swiper>
    </div>
  );
};

export default Headlines;
