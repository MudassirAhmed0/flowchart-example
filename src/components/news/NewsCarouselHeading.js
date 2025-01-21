import Link from "next/link";
import React from "react";

const NewsCarouselHeading = ({ heading }) => {
  return (
    <div className="myContainer flex justify-between items-center pb-[10px] md:pb-[0.78125vw] mb-[30px] md:mb-[3.75vw] border-b-[2px] border-[#EAEDEE]">
      <div className="relative headlineLIne">
        <h4 className="heading4 text-[#333] ">{heading}</h4>
      </div>
      {/* <Link
        href={""}
        className="flex chevronAnimate items-center para24 text-[#6CC499]"
      >
        اظهار الكل
        <img
          src="/images/icons/newsHeadingChevron.svg"
          className="w-[16px] md:w-[1.66666666667vw] transition duration-500"
          alt="chevron"
        />
      </Link> */}
    </div>
  );
};

export default NewsCarouselHeading;
