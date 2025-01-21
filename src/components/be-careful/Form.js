"use client";
import React, { useRef, useState } from "react";
import Lottie from "react-lottie-player";
import formJson from "../../../public/json/form.json";
import postForm from "@/lib/data-hooks/postForm";
import ReCAPTCHA from "react-google-recaptcha";

const Form = ({ en, title, desc }) => {
  const submissionMessageEl = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);
  const formContainer = useRef(null);
  const agreeRef = useRef(null);
  const fileError = useRef(null);
  const fileLabelRef = useRef(null);
  const captchaRef = useRef(null);
  const [isVerified, setIsVerified] = useState(false);
  const [captchaError, setCaptchaError] = useState(false);
  const [states, setStates] = useState({
    message: "",
    name: "",
    uploadCV: null,
    isAgreed: false,
  });

  const handleRecaptchaChange = (token) => {
    // This callback will be called when the user verifies the CAPTCHA
    setIsVerified(true);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    fileLabelRef.current.style.backgroundColor = "#ffffff26";

    handleFileChange(e.dataTransfer);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    fileLabelRef.current.style.backgroundColor = "#27181826";
  };

  const handleFileChange = (event) => {
    if (event.files[0]?.size > 5242880) {
      fileError.current.classList.remove("hidden");
      setStates({
        ...states,
        uploadCV: null,
      });
      setTimeout(() => {
        fileError.current.classList.add("hidden");
      }, 15000);
    } else {
      fileError.current.classList.add("hidden");

      setStates({
        ...states,
        uploadCV: event.files[0],
      });
    }
  };
  const handleChange = (event) => {
    if (event.target.type == "file") {
      handleFileChange(event.target);
      return;
    }
    if (event.target.type == "checkbox") {
      setStates({
        ...states,
        [event.target.id]: event.target.checked,
      });
      return;
    }
    if (event.target.value.length < 501) {
      setStates({
        ...states,
        [event.target.id]: event.target.value,
      });
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    formRef.current.scrollIntoView({ behavior: "smooth" });
    if (!states.message) {
      const errorElement = document.querySelector("textarea").parentElement;
      errorElement.classList.add("error");
      setTimeout(() => {
        errorElement.classList.remove("error");
      }, 8000);
      setIsLoading(false);
    } else if (!states.isAgreed) {
      agreeRef.current.classList.remove("hidden");
      setTimeout(() => {
        agreeRef.current.classList.add("hidden");
      }, 8000);
      setIsLoading(false);
    } else {
      if (isVerified) {
        await postForm(states);
        submissionMessageEl.current.classList.remove("opacity-0");
        formContainer.current.classList.add("hidden");

        setStates({
          message: "",
          name: "",
          uploadCV: null,
          isAgreed: false,
        });
      } else {
        setCaptchaError(true);
        setTimeout(() => {
          setCaptchaError(false);
        }, 8000);
      }
      setIsLoading(false);
    }
  };
  return (
    <section>
      <div className="relative ">
        <img
          src="/images/be-careful/form/bg.jpg"
          alt="Form Background"
          className="absolute top-0 leftRightFixer1 w-full h-full object-cover flipped"
        />
        <div className="md:py-[9.03645833333vw] py-[80px] relative z-[2] flex md:gap-x-[13.28125vw] flex-wrap gap-y-[40px] justify-center">
          <div className="w-[220px] h-[220px] mx-[auto] md:mx-[unset] md:mt-[2.86458333333vw] md:w-[20.8333333333vw] md:h-[20.8333333333vw]">
            <Lottie
              loop
              animationData={formJson}
              play
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="md:w-[48.3854166667vw] w-[90vw] mx-[auto] md:mx-[unset]">
            <div className="text-[#FFFFFF] w-[93%]">
              <h2 data-aos="fade-up" className="heading2 capitalize ">
                {title}
              </h2>
              <p
                className="para24 font-[500]  md:mt-[1.25vw] mt-[12px]"
                data-aos="fade-down"
              >
                {desc}
              </p>
            </div>
            <form
              ref={formRef}
              className="be__Form md:mt-[4.58333333333vw] mt-[40px]"
              onSubmit={handleSubmit}
            >
              <span
                ref={submissionMessageEl}
                className="text-[28px] md:text-[1.8vw]  font-[500]   block mb-[10px] md:mb-[1vw]   text-green-400 opacity-0 "
              >
                {en
                  ? "Thank you! Your form has been submitted."
                  : "شكرا لك.. تم تقديم النموذج الخاص بك"}
              </span>
              <div ref={formContainer}>
                <div className="w-full  ">
                  <textarea
                    value={states.message}
                    onChange={handleChange}
                    id="message"
                    className="border-[#FFFFFF] border-b-[1px] w-full placeholder:md:text-[1.04166666667vw] placeholder:text-[14px] placeholder:font-[500] placeholder:text-opacity-[0.6] placeholder:text-[#FFFFFF] text-[#FFFFFF] bg-transparent outline-none text20 font-[500]"
                    placeholder={
                      en ? "Explain your experience *" : "اشرح تجربتك *"
                    }
                  ></textarea>
                  <div className=" text20 font-[500] text-[#FFFFFF]">
                    <span>
                      {states.message.length ? states.message.length : 0}
                    </span>
                    <span className="text-[#FFFFFF] text-opacity-[0.6]">
                      /500
                    </span>
                  </div>
                  <span className="para26 font-[500] mt-[0.5vw] absolute text-white errorElement opacity-0">
                    {en ? "This Field Is Required!" : "هذه الخانة مطلوبه!"}
                  </span>
                </div>
                <div
                  className="w-full border-[#FFFFFF] border-b-[1px]
                md:pb-[0.625vw] pb-[8px] md:mt-[4.58333333333vw] mt-[30px]"
                >
                  <input
                    type="text"
                    value={states.name}
                    onChange={handleChange}
                    name="name"
                    id="name"
                    className="w-full placeholder:md:text-[1.04166666667vw] placeholder:text-[14px] placeholder:font-[500] placeholder:text-opacity-[0.6]  placeholder:text-[#FFFFFF] text-[#FFFFFF] bg-transparent outline-none text20 font-[500]"
                    placeholder={
                      en ? "Type your name (optional)" : "اكتب اسمك (اختياري)"
                    }
                  />
                </div>
                <div className="w-full text20 font-[500] text-[#FFFFFF]  md:mt-[2.70833333333vw] mt-[30px]">
                  <span className="text-opacity-[0.6] text20 font-[500]  text-[#FFFFFF]">
                    {en
                      ? "Attach a picture (optional)"
                      : " ارفق صورة (اختياري) "}
                  </span>
                  <label
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    ref={fileLabelRef}
                    className="md:gap-x-[0.83333333333vw] gap-x-[12px] md:px-[1.66666666667vw] px-[16px] md:mt-[0.625vw] mt-[8px]  md:py-[1.61458333333vw] flex-col md:flex-row gap-y-[10px] transition-all duration-[500ms] py-[18px] bg-[#FFFFFF26] cursor-pointer font-[400] text-[#FFFFFF] text20 flex md:items-center"
                    htmlFor="uploadCV"
                  >
                    <div>
                      {states.uploadCV ? (
                        states.uploadCV.name
                      ) : (
                        <>
                          {" "}
                          <span>{en ? "Select a file " : "قم بتحميل ملف"}</span>
                          <span>
                            {" "}
                            {en
                              ? "or drag and-drop here"
                              : "أو السحب والإفلات هنا"}
                          </span>{" "}
                        </>
                      )}
                    </div>
                    <span
                      className={`${
                        en ? "ml-auto" : "mr-auto"
                      }  opacity-[0.7] text-[14px] md:text-[0.8vw]`}
                    >
                      JPG, PNG, PDF, DOCX - 5MB
                    </span>
                    <input
                      id="uploadCV"
                      className="hidden "
                      type="file"
                      name="cv"
                      accept=".jpg, .jpeg, .png, .pdf, .docx"
                      max-size="5242880"
                      onChange={handleChange}
                    ></input>
                  </label>
                </div>
                <span
                  ref={fileError}
                  className="para26 font-[500] mt-[8px] md:mt-[0.5vw] block relative hidden text-white  "
                >
                  {en
                    ? "File is too big! Max: 5 MB"
                    : "حجم الملف كبير  Max: 5 MB"}
                </span>
                <div className="w-full text20 font-[500] text-[#FFFFFF]  md:mt-[2.70833333333vw] mt-[20px]">
                  <label
                    className="md:gap-x-[0.41666666666vw] gap-x-[12px]  cursor-pointer font-[400] text-[#FFFFFF] text20 flex items-center"
                    htmlFor="isAgreed"
                  >
                    <div className="md:w-[1.25vw] md:h-[1.25vw] w-[20px] h-[20px] relative border-[#FFFFFF33] border-[1px] bg-[#FFFFFF]">
                      <input
                        id="isAgreed"
                        type="checkbox"
                        checked={states.isAgreed}
                        className=" w-full h-full appearance-none"
                        onChange={handleChange}
                      />
                      <img
                        src="/images/icons/tick.svg"
                        alt="tick"
                        className="checkedIcon opacity-0 pointer-events-none md:w-[1.04166666667vw] md:h-[1.04166666667vw] w-[85%] h-[85%] absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]"
                      />
                    </div>
                    <span>
                      {en
                        ? "I agree to publish online"
                        : " أوافق على النشر عبر الإنترنت"}
                    </span>
                  </label>
                </div>
                <span
                  ref={agreeRef}
                  className="para26 font-[500] mt-[8px] md:mt-[0.5vw]  text-white errorElement hidden"
                >
                  {en ? "This Field Is Required!" : "هذه الخانة مطلوبه!"}
                </span>
                <div className="md:my-[1vw] my-[15px]">
                  <ReCAPTCHA
                    hl={!en ? "ar" : "en"}
                    ref={captchaRef}
                    sitekey="6Ld0YdsoAAAAAGUQu2RVfb6D0ZLyY-VDRaAybwSU"
                    // sitekey="6Les-1QnAAAAAGg82FEaIT2MjE4Di0_oi_McPYd9"
                    onChange={handleRecaptchaChange}
                  />
                  {captchaError && (
                    <span className="para26 font-[500]  absolute text-white  ">
                      {en ? "This Field Is Required!" : "هذه الخانة مطلوبه!"}
                    </span>
                  )}
                </div>

                <div className="md:mt-[2.70833333333vw] mt-[20px]">
                  <button className="py-[8px] px-[30px] md:py-[1.171875vw] md:px-[3.359375vw]  para24 transition duration-500 bg-white hover:text-white text-[#89191B] hover:bg-[#89191B] font-[500]">
                    {isLoading
                      ? en
                        ? "Loading..."
                        : "جاري الارسال ..."
                      : en
                      ? "Send"
                      : `   إرسال
               `}{" "}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
