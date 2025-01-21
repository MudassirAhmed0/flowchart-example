"use client";
import React from "react";
import Map from "./Map";
import ExplorationMarkersLabels from "./ExplorationMarkersLabels";
import useResponsivness from "../useResponsivness";

const SummaryMap = ({ title, desc, map }) => {
  const { isDesktop } = useResponsivness();
  return (
    <section
      id="summaryMap"
      className={`${
        map == "exploration" ? "" : "gbBorderT"
      } bg-[#343631] relative lg:py-[7.8125vw] pt-[75px] lg:h-[70.5729166667vw]`}
    >
      <div className="   myContainer flex justify-end pointer-events-none">
        <div className={`lg:w-[54.1666666667vw] flex flex-col relative z-[2]`}>
          {/* <h2 data-aos="fade-up" className="text50 ">
            {title}
          </h2>
          <div
            dangerouslySetInnerHTML={{ __html: desc }}
            data-aos="fade-down"
            className="mt30 lg:text25 mtext18 flex flex-col lg:gap-y-[1.97916666667vw] gap-y-[15px]"
          ></div> */}
          {map == "exploration" && <ExplorationMarkersLabels />}
        </div>
      </div>
      <div className=" relative top-[-100px]  lg:absolute w-full h-[500px] lg:h-full lg:top-0  flex align-end">
        {/* <img
          src="/images/phosphate/summaryMap/map.svg"
          className="w-full mt-auto"
        /> */}
        <Map map={map} isDesktop={isDesktop} />
      </div>
    </section>
  );
};

export default SummaryMap;
