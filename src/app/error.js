"use client";
import ClientHeader from "@/components/layout/ClientHeader";
// import Layout from "@/components/layout/Layout";
import { Button } from "@mui/base";
import React from "react";

const Error = () => {
  return (
    <>
      <div className="rtl">
        {/* <ClientHeader /> */}
        <div
          className="h-screen w-full
          flex items-center justify-center relative "
        >
          <div className="w-full h-full overflow-hidden absolute top-0 leftRightFixer1">
            <img
              src="/images/404/hero.jpg"
              alt="Not Found"
              className="w-full h-full object-cover absolute top-0 leftRightFixer1 flipped"
            />
            <span className="absolute h-full w-full top-0 leftRightFixer1 bg-[#244A54] bg-opacity-[0.2]"></span>
            <span className="error__Overlay absolute md:h-[44.21875vw] h-[60%] w-full top-0 leftRightFixer1 "></span>
          </div>
          <div
            className="text-[#FFFFFF] font-[700] relative z-[2]
              flex flex-col items-center"
          >
            <span
              className="  md:text-[10.4166666667vw] text-[120px]
                  md:leading-[12.5vw] leading-[160px]"
            >
              400
            </span>
            <p className="para24">Something went wrong!</p>
            <div
              className="flex justify-center
                  md:mt-[3.33333333333vw] mt-[24px]"
            >
              <Button href={"/"} text={"Go Back to Homepage"} />
            </div>
          </div>
        </div>
        <div
          className="w-full flex justify-center bg-[#244A54]
          md:py-[0.78125vw]  text-center p-[5%] md:px-[unset]"
        >
          <span
            className="md:text-[0.9375vw] text-[16px]
          text-[#FFFFFF] font-[500]"
          >
            الحقوق محفوظة © 2024 لجنة الإعلام والتوعية المصرفية بالبنوك السعودية
          </span>
        </div>
      </div>
    </>
  );
};

export default Error;
