import React from "react";

const Content = ({ title, desc }) => {
  return (
    <div className="md:w-[62.0833333333vw] w-[90vw] mx-[auto] flex flex-col items-center  md:gap-y-[1.40625vw] gap-y-[16px] text-center">
      <h3 data-aos="fade-up" className="text-[#000] heading2 ">
        {title}
      </h3>
      {desc && (
        <div
          dangerouslySetInnerHTML={{ __html: desc }}
          data-aos="fade-down"
          className="md:w-[45.3125vw] para24 font-[500] text-[#333]"
        ></div>
      )}
    </div>
  );
};

export default Content;
