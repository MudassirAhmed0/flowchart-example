import Link from "next/link";
import React from "react";

const NewsCard2 = ({
  img,
  date,
  heading,
  grid,
  noClamp,
  paragraph,
  slug,
  alt,
  en,
  source,
}) => {
  const truncatedString = (input, maxLength) => {
    // Remove HTML tags from the input string
    if (input) {
      const strippedString = input.replace(/(<([^>]+)>)/gi, "");

      // Truncate the stripped string based on the maxLength
      const truncatedString =
        strippedString.length > maxLength
          ? strippedString.substring(0, maxLength) + "..."
          : strippedString;

      return truncatedString;
    }
  };
  return (
    <Link
      // href={en ? "/en/news/" + slug : "/news/" + slug}
      target="_blank"
      href={source ? source : "#"}
      className={`${
        grid ? "w-full newsGridCard" : "md:w-[41.40625vw] w-full "
      } flex md:gap-[1.25vw] md:flex-wrap gap-[16px] newsMobBorder   `}
    >
      <div
        className={`${
          grid
            ? "min-w-[80px] w-[80px] h-[80px] md:min-w-[unset] md:w-[16.6666666667vw] md:h-[11.4583333333vw]"
            : "min-w-[80px] w-[80px] h-[80px]   md:min-w-[10.9375vw] md:w-[10.9375vw] md:h-[7.03125vw]"
        }`}
      >
        <img
          src={img ? img : "/images/news/cardPlaceholder.jpg"}
          alt={alt ? alt : heading}
          className="w-full object-contain
                h-full"
        />
      </div>
      <div className={`${grid ? "md:w-[65%]" : "md:w-[29.0625vw]"}`}>
        <h5
          className={` md:text-[1.15416666667vw] md:leading-[2.43125vw] text-[14px] leading-[24px] text-[#000000] font-[700]  line-clamp-2 `}
        >
          {" "}
          {heading}
        </h5>

        <span className="md:text-[1.04166666667vw] md:leading-[1.5625vw] text-[12px] leading-[22px] text-[#999999]">
          {date}
        </span>
        {grid && (
          <p className="para22 text-[#999999] hidden md:block line-clamp-3  font-[400] md:mt-[0.88541666666vw] mt-[12px]">
            {truncatedString(paragraph, 200)}
          </p>
        )}
      </div>
    </Link>
  );
};

export default NewsCard2;
