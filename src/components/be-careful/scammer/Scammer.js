"use client";
import React from "react";
import Content from "./Content";
import TimeLineDeskstop from "./TimeLineDeskstop";
import TimeLineMob from "./TimeLineMob";

const Scammer = ({ en, timelineData, title, desc }) => {
  return (
    <section>
      {/* <span className='w-full h-[2px] bg-[#000] top-[50%] fixed left-0'></span> */}
      <div>
        <div className="md:pb-[9.375vw] pb-[80px] transform lg:scale-[0.8] top-[-6vw]">
          {/* <Content title={title} desc={desc} /> */}
          <div className="md:pb-[8.33333333333vw]   md:w-[84.9479166667vw] w-[90vw] mx-[auto] md:mt-[3.75vw] mt-[40px] ">
            <TimeLineDeskstop en={en} data={timelineData} />
            <TimeLineMob en={en} data={timelineData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scammer;
