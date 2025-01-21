import React from "react";

const QuizRadio = ({
  label,
  id,
  name,
  en,
  handleCheckChange,
  marks,
  question,
  index,
}) => {
  return (
    <div
      className={`relative cursor-pointer ${
        en ? "pl-[20px] md:pl-[3.125vw]" : "pr-[20px] md:pr-[3.125vw]"
      }`}
    >
      <input
        type="radio"
        id={id}
        name={name}
        className="absolute opacity-0 quizCheckbox"
        onChange={() => handleCheckChange(name, marks, label, question, index)}
      />

      <label
        htmlFor={id}
        className="text-[#244A54] cursor-pointer text-[14px] md:text-[1.35416666667vw] quizCheckboxLabel"
      >
        {label}
      </label>
    </div>
  );
};

export default QuizRadio;
