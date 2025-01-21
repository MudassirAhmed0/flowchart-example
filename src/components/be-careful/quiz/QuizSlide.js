import React, { useEffect, useRef } from "react";
import QuizRadio from "./QuizRadio";

const QuizSlide = ({
  en,
  index,
  handleCheckChange,
  question,
  radioButtons,
  yes_label,
  no_label,
  sometimes_label,
}) => {
  const yesShow = useRef(false);
  const noShow = useRef(false);
  const sometimesShow = useRef(false);

  useEffect(() => {
    radioButtons.forEach((btn) => {
      if (btn.value == "Yes") {
        yesShow.current = true;
      } else if (btn.value == "Sometimes") {
        sometimesShow.current = true;
      } else if (btn.value == "No") {
        noShow.current = true;
      }
    });
  }, [radioButtons]);

  return (
    <div className="bg-[#89191B1A] pt-[60px] pb-[30px]  w-full h-full flex items-center justify-end   flex-col gap-y-[30px] md:gap-y-[3vw] md:px-[1.61458333333vw] md:py-[6.25vw] ">
      <span className="para24 text-[#244A54] font-[400] max-w-[90%] text-center">
        {question}
      </span>
      <div
        className={`flex gap-x-[3.25vw] max-md:px-5 ${
          (yes_label.length > 50 ||
            no_label.length > 50 ||
            sometimes_label.length > 50) &&
          "md:flex-col md:gap-y-[3.25vw]"
        } ${
          yes_label.length > 20 ||
          no_label.length > 20 ||
          sometimes_label.length > 20
            ? "max-md:flex-col max-md:gap-y-[6vw]"
            : ""
        } ${
          yes_label.length > 15 &&
          no_label.length > 15 &&
          sometimes_label.length > 15
            ? "md:flex-col md:gap-y-[3.25vw]"
            : ""
        }`}
      >
        {yesShow.current && (
          <QuizRadio
            label={yes_label}
            id={"Yes" + index}
            name={"question" + index}
            en={en}
            handleCheckChange={handleCheckChange}
            marks={3}
            question={question}
            index={index}
          />
        )}
        {sometimesShow.current && (
          <QuizRadio
            label={sometimes_label}
            id={"Sometimes" + index}
            name={"question" + index}
            en={en}
            handleCheckChange={handleCheckChange}
            question={question}
            marks={2}
            index={index}
          />
        )}
        {noShow.current && (
          <QuizRadio
            label={no_label}
            id={"No" + index}
            name={"question" + index}
            en={en}
            handleCheckChange={handleCheckChange}
            marks={1}
            question={question}
            index={index}
          />
        )}
      </div>
    </div>
  );
};

export default QuizSlide;
