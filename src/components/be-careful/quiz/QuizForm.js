"use client";
import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useEffect } from "react";
import saudiCities from "./citiesData";

const QuizForm = ({ en, setQuizShow, setFormStates }) => {
  const submissionMessageEl = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);
  const formContainer = useRef(null);
  const [showCity, setShowCity] = useState(false);
  const captchaRef = useRef(null);
  const [isVerified, setIsVerified] = useState(false);
  const [captchaError, setCaptchaError] = useState(false);
  const [filteredCities, setFilteredCities] = useState(saudiCities);
  const [states, setStates] = useState({
    name: "",
    age: "",
    gender: "",
    hearAboutCampaignValue: "",
    cityValue: "",
    hearAboutCampaign: "",
    preferredPlatform: "",
    preferredPlatformValue: "",
    socialName: "",
  });

  const socialNamePlaceHolder = en
    ? ""
    : states.preferredPlatform == "اكس"
    ? "ادخل اسم حسابك على اكس @"
    : states.preferredPlatform == "تيك توك"
    ? "ادخل اسم حسابك على تيك توك @"
    : "ادخل اسم حسابك على انستقرام @";

  // useEffect(() => {

  //   // Scroll to the 'quiz-form' section on component mount
  //   const quizFormSection = document.getElementById('quiz-form');
  //   if (quizFormSection) {
  //     setTimeout(() => {
  //       quizFormSection.scrollIntoView({ behavior: 'smooth' });
  //     }, 500);
  //   }
  // }, []);

  const handleRecaptchaChange = (token) => {
    // This callback will be called when the user verifies the CAPTCHA
    setIsVerified(true);
  };

  const handleChange = (event) => {
    if (event.target.id == "cityValue") {
      setFilteredCities(
        saudiCities.filter(
          (city) => {
            if (en) {
              return city.englishName
                .toLowerCase()
                .includes(event.target.value.toLowerCase());
            } else {
              return city.arabicName
                .toLowerCase()
                .includes(event.target.value.toLowerCase());
            }
          }
          // city.name.toLowerCase().includes(event.target.value.toLowerCase())
        )
      );
    }

    setStates({
      ...states,
      [event.target.id]: event.target.value,
    });
  };

  const handleRadioChange = (e) => {
    setStates({ ...states, gender: e.target.value });
  };
  const handleDropdownClick = (id, value, id2, value2) => {
    const container = document.getElementById(id);
    container.classList.toggle("show");
    setStates({ ...states, [id]: value, [id2]: value2 });
  };
  const preventMinus = (e) => {
    if (e.code === "Minus") {
      e.preventDefault();
    }
  };
  const handleDropdown = (selected) => {
    let dropDownContainer;

    dropDownContainer = selected.target.parentElement;
    dropDownContainer.classList.toggle("show");
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    let isError = false;
    document.querySelectorAll(".inputWrapper").forEach((inputWrapper) => {
      if (inputWrapper.classList.contains("saudianInputWrapper")) {
        if (!states.gender) {
          isError = true;
          const errorElement = inputWrapper.querySelector(".errorElement");
          errorElement.classList.remove("opacity-0");
          setTimeout(() => {
            errorElement.classList.add("opacity-0");
          }, 8000);
        }
      }
      if (!inputWrapper.querySelector("input").value) {
        isError = true;

        const errorElement = inputWrapper.querySelector(".errorElement");
        errorElement.classList.remove("opacity-0");
        setTimeout(() => {
          errorElement.classList.add("opacity-0");
        }, 8000);
      }

      if (isVerified) {
        if (!isError) {
          setQuizShow(true);
          setFormStates(states);
        }
      } else {
        setCaptchaError(true);
        setTimeout(() => {
          setCaptchaError(false);
        }, 8000);
      }
    });
    // setIsLoading(true);
    // formRef.current.scrollIntoView({ behavior: "smooth" });
    // if (!states.message) {
    //   const errorElement = document.querySelector("textarea").parentElement;
    //   errorElement.classList.add("error");
    //   setTimeout(() => {
    //     errorElement.classList.remove("error");
    //   }, 8000);
    //   setIsLoading(false);
    // } else if (!states.isAgreed) {
    //   agreeRef.current.classList.remove("hidden");
    //   setTimeout(() => {
    //     agreeRef.current.classList.add("hidden");
    //   }, 8000);
    //   setIsLoading(false);
    // } else {
    //   await postForm(states);
    //   submissionMessageEl.current.classList.remove("opacity-0");
    //   formContainer.current.classList.add("hidden");

    //   setStates({
    //     message: "",
    //     name: "",
    //     uploadCV: null,
    //     isAgreed: false,
    //   });
    //   setIsLoading(false);
    // }
  };

  const handleCityChange = () => {
    if (showCity == true) {
      setShowCity(false);
      setStates({ ...states, cityValue: "" });
      setFilteredCities(saudiCities);
      document.getElementById("cityValue").blur();
    } else {
      setShowCity(true);
      document.getElementById("cityValue").focus();
    }
  };

  return (
    <form
      ref={formRef}
      className="be__Form md:w-[69.5833333333vw] w-[90%] mx-auto"
      onSubmit={handleSubmit}
    >
      <div ref={formContainer}>
        <div className="flex flex-col md:gap-y-[1.5vw]">
          <div className="inputWrapper">
            <div
              className="w-full border-[#000] border-b-[1px]
        md:pb-[0.625vw] pb-[8px]  "
            >
              <input
                type="text"
                value={states.name}
                onChange={handleChange}
                name="name"
                id="name"
                className="w-full placeholder:md:text-[1.04166666667vw] placeholder:text-[14px] placeholder:font-[500] placeholder:text-opacity-[0.6]
            placeholder:text-[#000] text-[#000] bg-transparent outline-none text20 font-[500]"
                placeholder={en ? "Your Name *" : " الاسم *"}
              />
            </div>
            <span className="para24 font-[500] mt-[0.5vw]  text-red-600 errorElement opacity-0">
              {en ? "This Field Is Required!" : "هذه الخانة مطلوبه!"}
            </span>
          </div>
          <div className="inputWrapper">
            <div
              className="w-full border-[#000] border-b-[1px]
        md:pb-[0.625vw] pb-[8px] "
            >
              <input
                type="number"
                value={states.age}
                onChange={handleChange}
                onKeyPress={preventMinus}
                min="0"
                name="age"
                id="age"
                className="w-full placeholder:md:text-[1.04166666667vw] placeholder:text-[14px] placeholder:font-[500] placeholder:text-opacity-[0.6]
            placeholder:text-[#000] text-[#000] bg-transparent outline-none text20 font-[500]"
                placeholder={en ? "Age *" : " العمر *"}
              />
            </div>
            <span className="para24 font-[500] mt-[0.5vw]  text-red-600 errorElement opacity-0">
              {en ? "This Field Is Required!" : "هذه الخانة مطلوبه!"}
            </span>
          </div>
          <div className="inputWrapper saudianInputWrapper">
            <div className="">
              <span className="text-op acity-[0.6] md:text-[1.35416666667vw] md:leading-[2.03125vw] text-[16px] leading-[26px] font-[500]  text-[#000]">
                {en ? "What's your gender *" : "ما هو جنسك *"}
              </span>
              <div
                className="flex gap-x-[24px] md:gap-x-[3vw] mt-[12px] md:mt-[0.8vw]"
                onChange={handleRadioChange}
              >
                <div
                  className={`relative cursor-pointer ${
                    en ? "pl-[20px] md:pl-[2.5vw]" : "pr-[20px] md:pr-[2.5vw]"
                  }`}
                >
                  <input
                    type="radio"
                    id={"female"}
                    name={"gender"}
                    value={"female"}
                    className="absolute opacity-0 quizCheckbox"
                    onChange={handleRadioChange}
                  />

                  <label
                    htmlFor={"female"}
                    className="text-opacity-[0.6] text-[#000] cursor-pointer text-[14px] md:text-[1.35416666667vw] quizCheckboxLabel2"
                  >
                    {en ? "Female" : "انثى"}
                  </label>
                </div>
                <div
                  className={`relative cursor-pointer ${
                    en ? "pl-[20px] md:pl-[2.5vw]" : "pr-[20px] md:pr-[2.5vw]"
                  }`}
                >
                  <input
                    type="radio"
                    id={"male"}
                    name={"gender"}
                    value="male"
                    className="absolute opacity-0 quizCheckbox"
                    onChange={handleRadioChange}
                  />

                  <label
                    htmlFor={"male"}
                    className="text-opacity-[0.6] text-[#000] cursor-pointer text-[14px] md:text-[1.35416666667vw] quizCheckboxLabel2"
                  >
                    {en ? "Male" : "ذكر"}
                  </label>
                </div>
              </div>
            </div>
            <span className="para24 font-[500] mt-[0.5vw]  text-red-600 errorElement opacity-0">
              {en ? "This Field Is Required!" : "هذه الخانة مطلوبه!"}
            </span>
          </div>
          <div className="inputWrapper">
            <div
              id="city"
              className={`w-full border-[#000] border-b-[1px] md:pb-[0.625vw] pb-[8px] relative formDropdownContainer ${
                showCity ? "show" : ""
              }`}
            >
              <div
                onClick={handleCityChange}
                className="cursor-pointer formSubDropdownContainer"
              >
                <input
                  type="text"
                  value={states.cityValue}
                  onChange={handleChange}
                  name="city"
                  id="cityValue"
                  className="w-full pointer-events-none  placeholder:md:text-[1.04166666667vw] placeholder:text-[14px] placeholder:font-[500] placeholder:text-opacity-[0.6] placeholder:text-[#000] text-[#000] bg-transparent outline-none text20 font-[500]"
                  placeholder={en ? "Select Your City *" : "اختر مدينتك *"}
                />
                <svg
                  className={`w-[7px] pointer-events-none md:w-[0.5vw] absolute transform rotate-[-90deg] transition-all top-[10px] md:top-[1vw] duration-300 ${
                    en
                      ? " right-[10px]  md:right-[1vw]"
                      : " left-[10px] md:left-[1vw]"
                  }`}
                  id="Capa_1"
                  style={{ enableBackground: "new 0 0 26.002 45.999" }}
                  version="1.1"
                  viewBox="0 0 26.002 45.999"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <path d="M24.998,40.094c1.338,1.352,1.338,3.541,0,4.893c-1.338,1.35-3.506,1.352-4.846,0L1.004,25.447  c-1.338-1.352-1.338-3.543,0-4.895L20.152,1.014c1.34-1.352,3.506-1.352,4.846,0c1.338,1.352,1.338,3.541,0,4.893L9.295,23  L24.998,40.094z" />
                </svg>
              </div>
              <div className="formDropDown w-full absolute top-[35px] md:top-[3vw] !overflow-scroll">
                <ul className="  para24   text-[#000] bg-white  border text-opacity-[0.6] overflow-scroll">
                  {filteredCities.map((city, index) => (
                    <li
                      key={index}
                      onClick={() =>
                        handleDropdownClick(
                          "city",
                          en ? city.englishName : city.arabicName,
                          "cityValue",
                          en ? city.englishName : city.arabicName
                        )
                      }
                      className="py-[10px] md:py-[1vw] border-b hover:opacity-[0.5] bg-[#fff] cursor-pointer"
                    >
                      <span className="px-[10px] md:px-[1vw]">
                        {en ? city.englishName : city.arabicName}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <span className="para24 font-[500] mt-[0.5vw]  text-red-600 errorElement opacity-0">
              {en ? "This Field Is Required!" : "هذه الخانة مطلوبه!"}
            </span>
          </div>
          <div className="inputWrapper">
            <div
              id="hearAboutCampaign"
              className="w-full border-[#000] border-b-[1px]
        md:pb-[0.625vw] pb-[8px] relative formDropdownContainer"
            >
              <div
                onClick={(e) => handleDropdown(e)}
                className="cursor-pointer formSubDropdownContainer"
              >
                <input
                  type="text"
                  value={states.hearAboutCampaign}
                  onChange={handleChange}
                  name="hearAboutCampaign"
                  id="hearAboutCampaign"
                  className="w-full pointer-events-none placeholder:md:text-[1.04166666667vw] placeholder:text-[14px] placeholder:font-[500] placeholder:text-opacity-[0.6]
            placeholder:text-[#000] text-[#000] bg-transparent outline-none text20 font-[500]"
                  placeholder={
                    en
                      ? "How did you hear about Be Careful Campaign? *"
                      : "كيف سمعت عن حملة خلك حريص *"
                  }
                />
                <svg
                  className={`w-[7px] pointer-events-none md:w-[0.5vw] absolute transform rotate-[-90deg] transition-all top-[10px] md:top-[1vw] duration-300 ${
                    en
                      ? " right-[10px]  md:right-[1vw]"
                      : " left-[10px] md:left-[1vw]"
                  }`}
                  id="Capa_1"
                  style={{ enableBackground: "new 0 0 26.002 45.999" }}
                  version="1.1"
                  viewBox="0 0 26.002 45.999"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <path d="M24.998,40.094c1.338,1.352,1.338,3.541,0,4.893c-1.338,1.35-3.506,1.352-4.846,0L1.004,25.447  c-1.338-1.352-1.338-3.543,0-4.895L20.152,1.014c1.34-1.352,3.506-1.352,4.846,0c1.338,1.352,1.338,3.541,0,4.893L9.295,23  L24.998,40.094z" />
                </svg>
              </div>
              <div className="formDropDown w-full absolute top-[35px] md:top-[3vw]">
                <ul className="  para24   text-[#000] bg-white  border text-opacity-[0.6]">
                  <li
                    onClick={() =>
                      handleDropdownClick(
                        "hearAboutCampaign",
                        en ? "Outdoor Ads" : "إعلانات خارجية",
                        "hearAboutCampaignValue",
                        "Outdoor Ads"
                      )
                    }
                    className="py-[10px] md:py-[1vw] border-b hover:opacity-[0.5] bg-[#fff] cursor-pointer"
                  >
                    <span className="px-[10px] md:px-[1vw]">
                      {en ? "Outdoor Ads" : "إعلانات خارجية"}
                    </span>
                  </li>
                  <li
                    onClick={() =>
                      handleDropdownClick(
                        "hearAboutCampaign",
                        en ? "Airports /Malls" : "المطارات / المولات",
                        "hearAboutCampaignValue",
                        "Airports /Malls"
                      )
                    }
                    className="py-[10px] md:py-[1vw] border-b hover:opacity-[0.5] bg-[#fff] cursor-pointer"
                  >
                    <span className="px-[10px] md:px-[1vw]">
                      {en ? "Airports /Malls" : "المطارات / المولات"}
                    </span>
                  </li>
                  <li
                    onClick={() =>
                      handleDropdownClick(
                        "hearAboutCampaign",
                        en ? "SMS messages " : "رسائل SMS",
                        "hearAboutCampaignValue",
                        "SMS messages "
                      )
                    }
                    className="py-[10px] md:py-[1vw] border-b hover:opacity-[0.5] bg-[#fff] cursor-pointer"
                  >
                    <span className="px-[10px] md:px-[1vw]">
                      {en ? "SMS messages " : "رسائل SMS"}
                    </span>
                  </li>
                  <li
                    onClick={() =>
                      handleDropdownClick(
                        "hearAboutCampaign",
                        en ? "Influencers" : "المؤثرون",
                        "hearAboutCampaignValue",
                        "Influencers"
                      )
                    }
                    className="py-[10px] md:py-[1vw] border-b hover:opacity-[0.5] bg-[#fff] cursor-pointer"
                  >
                    <span className="px-[10px] md:px-[1vw]">
                      {en ? "Influencers" : "المؤثرون"}
                    </span>
                  </li>
                  <li
                    onClick={() =>
                      handleDropdownClick(
                        "hearAboutCampaign",
                        en
                          ? "Social Media platforms"
                          : "منصات التواصل الاجتماعي",
                        "hearAboutCampaignValue",
                        "Social Media platforms"
                      )
                    }
                    className="py-[10px] md:py-[1vw]  hover:opacity-[0.5] bg-[#fff] cursor-pointer"
                  >
                    <span className="px-[10px] md:px-[1vw]">
                      {en
                        ? "Social Media platforms"
                        : "منصات التواصل الاجتماعي"}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <span className="para24 font-[500] mt-[0.5vw]  text-red-600 errorElement opacity-0">
              {en ? "This Field Is Required!" : "هذه الخانة مطلوبه!"}
            </span>
          </div>
          <div className="inputWrapper">
            <div
              id="preferredPlatform"
              className="w-full border-[#000] border-b-[1px]
        md:pb-[0.625vw] pb-[8px] relative formDropdownContainer"
            >
              <div
                onClick={(e) => handleDropdown(e)}
                className="cursor-pointer formSubDropdownContainer"
              >
                <input
                  type="text"
                  value={states.preferredPlatform}
                  onChange={handleChange}
                  name="preferredPlatform"
                  id="preferredPlatform"
                  className="w-full pointer-events-none placeholder:md:text-[1.04166666667vw] placeholder:text-[14px] placeholder:font-[500] placeholder:text-opacity-[0.6]
            placeholder:text-[#000] text-[#000] bg-transparent outline-none text20 font-[500]"
                  placeholder={
                    en
                      ? "Preferred platform to contact you *"
                      : "منصات التواصل الاجتماعي *"
                  }
                />
                <svg
                  className={`w-[7px] pointer-events-none md:w-[0.5vw] absolute transform rotate-[-90deg] transition-all top-[10px] md:top-[1vw] duration-300 ${
                    en
                      ? " right-[10px]  md:right-[1vw]"
                      : " left-[10px] md:left-[1vw]"
                  }`}
                  id="Capa_1"
                  style={{ enableBackground: "new 0 0 26.002 45.999" }}
                  version="1.1"
                  viewBox="0 0 26.002 45.999"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <path d="M24.998,40.094c1.338,1.352,1.338,3.541,0,4.893c-1.338,1.35-3.506,1.352-4.846,0L1.004,25.447  c-1.338-1.352-1.338-3.543,0-4.895L20.152,1.014c1.34-1.352,3.506-1.352,4.846,0c1.338,1.352,1.338,3.541,0,4.893L9.295,23  L24.998,40.094z" />
                </svg>
              </div>
              <div className="formDropDown w-full absolute top-[35px] md:top-[3vw]">
                <ul className="  para24   text-[#000] bg-white  border text-opacity-[0.6]">
                  <li
                    onClick={() =>
                      handleDropdownClick(
                        "preferredPlatform",
                        en ? "X" : "اكس",
                        "preferredPlatformValue",
                        "X"
                      )
                    }
                    className="py-[10px] md:py-[1vw] border-b hover:opacity-[0.5] bg-[#fff] cursor-pointer"
                  >
                    <span className="px-[10px] md:px-[1vw]">
                      {en ? "X" : "اكس"}
                    </span>
                  </li>
                  <li
                    onClick={() =>
                      handleDropdownClick(
                        "preferredPlatform",
                        en ? "Tiktok" : "تيك توك",
                        "preferredPlatformValue",
                        "Tiktok"
                      )
                    }
                    className="py-[10px] md:py-[1vw] border-b hover:opacity-[0.5] bg-[#fff] cursor-pointer"
                  >
                    <span className="px-[10px] md:px-[1vw]">
                      {en ? "Tik Tok" : "تيك توك"}
                    </span>
                  </li>

                  <li
                    onClick={() =>
                      handleDropdownClick(
                        "preferredPlatform",
                        en ? "Instagram" : "انستقرام",
                        "preferredPlatformValue",
                        "Instagram"
                      )
                    }
                    className="py-[10px] md:py-[1vw]  hover:opacity-[0.5] bg-[#fff] cursor-pointer"
                  >
                    <span className="px-[10px] md:px-[1vw]">
                      {en ? "Instagram" : "انستقرام"}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <span className="para24 font-[500] mt-[0.5vw]  text-red-600 errorElement opacity-0">
              {en ? "This Field Is Required!" : "هذه الخانة مطلوبه!"}
            </span>
          </div>
          {states.preferredPlatform && (
            <div className="inputWrapper">
              <div
                className="w-full border-[#000] border-b-[1px]
        md:pb-[0.625vw] pb-[8px] "
              >
                <input
                  type="text"
                  value={states.socialName}
                  onChange={handleChange}
                  name="socialName"
                  id="socialName"
                  className="w-full placeholder:md:text-[1.04166666667vw] placeholder:text-[14px] placeholder:font-[500] placeholder:text-opacity-[0.6]
            placeholder:text-[#000] text-[#000] bg-transparent outline-none text20 font-[500]"
                  placeholder={
                    en
                      ? `Enter your ${states?.preferredPlatform} username *`
                      : `ادخل اسم حسابك على ${states?.preferredPlatform} @ *`
                  }
                />
              </div>
              <span className="para24 font-[500] mt-[0.5vw]  text-red-600 errorElement opacity-0">
                {en ? "This Field Is Required!" : "هذه الخانة مطلوبه!"}
              </span>
            </div>
          )}
        </div>
        <div className="md:my-[1vw] my-[15px]">
          <ReCAPTCHA
            hl={!en ? "ar" : "en"}
            ref={captchaRef}
            sitekey="6Ld0YdsoAAAAAGUQu2RVfb6D0ZLyY-VDRaAybwSU"
            // sitekey="6Les-1QnAAAAAGg82FEaIT2MjE4Di0_oi_McPYd9"
            onChange={handleRecaptchaChange}
          />
          {captchaError && (
            <span className="para24 font-[500]  absolute text-red-600  ">
              {en ? "This Field Is Required!" : "هذه الخانة مطلوبه!"}
            </span>
          )}
        </div>
        <div className="md:mt-[2.70833333333vw] mt-[20px]">
          <button
            type="submit"
            className="py-[8px] mx-auto block px-[30px] md:py-[1.171875vw] md:px-[3.359375vw]  para24 transition duration-500 bg-[#89191B]   text-[#fff] hover:opacity-[0.8] font-[500]"
          >
            {isLoading
              ? en
                ? "Loading..."
                : "جاري الارسال ..."
              : en
              ? "Start"
              : "ابدأ"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default QuizForm;
