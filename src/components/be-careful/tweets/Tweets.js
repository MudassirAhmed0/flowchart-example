"use client";
import SwiperButtons2 from "@/components/common/SwiperButtons2";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
const Tweets = ({ en }) => {
  const [swiperGap, setSwiperGap] = useState(0);
  useEffect(() => {
    setSwiperGap(
      window.innerWidth > 768 ? (window.innerWidth / 100) * 1.66666666667 : 24
    );
  }, []);
  return (
    <section>
      <div className="md:py-[9.375vw] py-[80px]">
        <h2 className="myContainer heading2 text-[#000] ">آخر التغريدات </h2>
        <div
          className={`${
            en ? "ml-[auto]" : "mr-[auto]"
          } md:pt-[3.75vw] pt-[40px] md:mx-[auto] md:w-[85.4166666667vw] w-[95vw]`}
        >
          {swiperGap == 0 || (
            <Swiper
              spaceBetween={swiperGap}
              slidesPerView={"auto"}
              className={`becarfeul__Swipers  w-full`}
            >
              <SwiperSlide className="w-[350px] py-[5%] md:py-[unset] md:w-[15.15625vw] md:h-[27.34375vw] border-[2px] border-[#CCC] md:rounded-[1.04166666667vw] rounded-[20px]">
                <div className="w-full h-full flex justify-center items-center">
                  <div className="w-[90%] h-[95%] ">
                    <div className="flex justify-between">
                      <img
                        src="/images/icons/tick.svg"
                        alt="tick"
                        className="  md:w-[1.5625vw] md:h-[1.5625vw] flipped w-[30px] h-[30px] "
                      />

                      <div className="flex items-center md:gap-x-[0.20833333333vw] gap-x-[8px]">
                        <div className="flex flex-col ">
                          <div className="flex items-center justify-end md:gap-x-[0.20833333333vw] gap-x-[6px]">
                            <img
                              src="/images/icons/tick.svg"
                              alt="tick"
                              className="  md:w-[1.04166666667vw] md:h-[1.04166666667vw] w-[20px] h-[20px] "
                            />
                            <span className="md:text-[0.9375vw] font-[500] text-[#000]">
                              Lorem dolor{" "}
                            </span>
                          </div>
                          <div className="flex items-center md:gap-x-[0.20833333333vw] gap-x-[6px]">
                            <div className="flex items-center md:gap-x-[0.20833333333vw] gap-x-[6px] md:text-[0.83333333333vw] font-[400] text-[#244A54] text-opacity-[0.6]   capitalize">
                              <span className="text-[#234a55] font-[500]">
                                Follow
                              </span>
                              <span className="">. </span>
                              <span className="">@SaudiBanks </span>
                            </div>
                          </div>
                        </div>
                        <img
                          src="/images/be-careful/protect-cm/batch/2.svg"
                          alt="batch"
                          className="md:w-[2.08333333333vw] md:h-[2.08333333333vw] w-[60px] h-[60px] object-cover flipped"
                        />
                      </div>
                    </div>
                    <p className="md:mt-[0.625vw] mt-[16px] md:text-[0.9375vw] md:leading-[1.25vw]">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit
                      elit elit elit.
                    </p>
                    <span className="text-[#234a55] font-[500] md:text-[0.9375vw] block mt-[24px] md:mt-[0.72916666666vw]">
                      #Loremsit
                    </span>
                    <div className="overflow-hidden mt-[10px] md:mt-[0.52083333333vw] w-full md:h-[10.9375vw] h-[350px] md:rounded-[1.04166666667vw] rounded-[20px]">
                      <img
                        src="/images/be-careful/avoid-fraud/1.jpg"
                        alt="img"
                        className=" w-full h-full object-cover flipped"
                      />
                    </div>
                    <div className="flex justify-between items-center md:py-[0.26041666666vw] py-[12px] border-[#000] border-b-[1px]">
                      <img
                        src="/images/icons/tick.svg"
                        alt="tick"
                        className=" md:w-[0.625vw] md:h-[0.625vw] w-[16px] h-[16px]"
                      />
                      <div
                        className="flex gap-x-[4px] md:gap-x-[0.3125vw] justify-end md:text-[0.83333333333vw] leading-[1.04166666667vw] font-[400] text-[#244A54] text-opacity-[0.6]
                                        "
                      >
                        <div>Aug 24, 2023</div>
                        <span>.</span>

                        <div className="flex md:gap-x-[0.20833333333vw]   gap-x-[4px]">
                          <span>PM</span>
                          <span>6:00</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end md:gap-x-[0.83333333333vw] gap-x-[24px] md:text-[0.83333333333vw] font-[500] md:py-[0.26041666666vw] py-[12px]">
                      <div className="flex items-center md:gap-x-[0.625vw] gap-x-[6px]">
                        <span>23</span>
                        <img
                          src="/images/icons/tick.svg"
                          alt="tick"
                          className=" md:w-[1.04166666667vw] md:h-[1.04166666667vw] w-[14px] h-[14px] "
                        />
                      </div>
                      <div className="flex items-center md:gap-x-[0.625vw] gap-x-[6px]">
                        <span>Reply</span>
                        <img
                          src="/images/icons/tick.svg"
                          alt="tick"
                          className=" md:w-[1.04166666667vw] md:h-[1.04166666667vw] w-[14px] h-[14px] "
                        />
                      </div>
                      <div className="flex items-center md:gap-x-[0.625vw] gap-x-[6px]">
                        <span>Share</span>
                        <img
                          src="/images/icons/tick.svg"
                          alt="tick"
                          className=" md:w-[1.04166666667vw] md:h-[1.04166666667vw] w-[14px] h-[14px] "
                        />
                      </div>
                    </div>
                    <button className="py-[12px] md:py-[0.20833333333vw] w-full text-[#234a55] font-[500] md:text-[0.83333333333vw]  border-[#000] border-[0.05208333333vw] md:rounded-[1.04166666667vw] rounded-[20px]">
                      <span>Read 7 replies</span>
                    </button>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperButtons2 />
            </Swiper>
          )}
        </div>
      </div>
    </section>
  );
};

export default Tweets;
