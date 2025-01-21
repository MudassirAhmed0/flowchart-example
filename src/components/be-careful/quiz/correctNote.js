import React from "react";
import Lottie from "react-lottie-player";

const CorrectNote = ({
  json,
  color,
  msgHead,
  msgDes,
  showStatus,
  handleReset,
  setShowCorrectNote,
}) => {
  return (
    <div
      className={`${
        showStatus ? "" : " opacity-0 pointer-events-none"
      } flex justify-center items-center z-[4] top-0 leftRightFixer1 w-full h-full fixed `}
    >
      <span
        onClick={handleReset}
        className="w-full h-full top-0 left-0 absolute bg-[#000] bg-opacity-[0.5]"
      ></span>
      <div className="md:w-[35.6770833333vw] flex md:h-[15.375vw] bg-white w-[90%] h-[40%] z-[3] relative">
        {showStatus && (
          <div
            className="mx-[auto] w-[90%] md:w-[27.34375vw]
        flex flex-col items-center justify-center text-center"
          >
            {/* <Lottie
              loop
              animationData={json}
              play
              className="md:w-[12.5vw] md:h-[12.5vw] w-[150px] h-[150px]"
            /> */}
            <h6 style={{ color: color }} className={`heading3`}>
              {msgHead}
            </h6>
            <p className="text-[#4A4A4A] heading4 font-[500] md:mt-[0.625vw] mt-[8px]">
              {msgDes}
            </p>
            <button
              onClick={() => setShowCorrectNote(false)}
              className="md:w-[10.4166666667vw] md:h-[3.125vw] w-[150px] h-[40px] bg-[#F2F2F2] text-[#4A4A4A] heading5 font-[500] rounded-[0.625vw] mt-[1.25vw]"
            >
              OK
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CorrectNote;
