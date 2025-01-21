import React from "react";

const ScammerInfo = ({ width, number, paragraph, classes }) => {
  return (
    <div
      className={`${
        width || "md:w-[16.6666666667vw]"
      }  flex items-center gap-x-[16px] md:items-start md:flex-col ${classes} transition-all duration-500`}
    >
      <span className="text-[#FFC162] md:text-[1.35416666667vw] md:leading-[2.03125vw] text-[32px] leading-[40px]  font-[700]">
        {number}.
      </span>
      <p className="text-[16px]  md:text-[0.9375vw] font-[500] text-[#333333]">
        {paragraph}
      </p>
    </div>
  );
};

export default ScammerInfo;
