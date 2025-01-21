import React from "react";
import Link from "next/link";

const NewsCard = ({
  img,
  date,
  heading,
  paragraph,
  span,
  carouselCard,
  noClamp,
}) => {
  return (
    <div
      className={`md:pb-[1vw] pb-[14px] ${carouselCard
          ? "w-[75vw] md:w-[28.0208333333vw] "
          : "md:w-[27.34375vw] w-full"
        }`}
    >
      <Link href={"/single-news"}>
        <img
          src={img}
          alt="news"
          className={`w-full object-cover flipped h-[270px] md:h-[23.9583333333vw]`}
        />
      </Link>

      <div className="md:mt-[1.35416666667vw] flex flex-col mt-[16px]">
        <span className="text20 text-[#999999]">{date}</span>
        <h5
          className={`text-[20px] leading-[30px] mt-[4px] md:mt-[0.2vw] min-h-[5vw] md:text-[1.66666666667vw] md:leading-[2.5vw] text-[#000000] font-[500] ${noClamp ? "" : " line-clamp-2 "
            }`}
        >
          {" "}
          {heading}{" "}
        </h5>
        {paragraph && (
          <p className="para24 text-[#999999] line-clamp-2 min-h-[3.85416666667vw] font-[400] md:my-[0.88541666666vw] my-[12px]">
            {paragraph}
          </p>
        )}
        {span && (
          <Link
            href={"/single-news"}
            className="flex items-end md:gap-x-[0.3125vw] gap-x-[6px]"
          >
            <span className="para24 text-[#6CC499]">{span}</span>
            <img
              src="/images/icons/leftgreenchevron.svg"
              alt="chevron"
              className="md:w-[1.66666666667vw] w-[24px] flipped"
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
