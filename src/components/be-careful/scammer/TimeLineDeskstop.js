import React from "react";
import ScammerInfo from "./ScammerInfo";

const TimeLineDeskstop = ({ en, data }) => {
  return (
    <div
      data-aos="fade"
      className=" md:justify-end items-start relative text-[16px]  activeTimeline hidden md:flex  md:text-[0.9375vw] font-[500] text-[#333333] "
    >
      <div
        className={`${
          en ? "md:left-[2.65625vw]" : "md:right-[2.65625vw]"
        } absolute   w-[14.0625vw] md:top-[4.0625vw]  hidden md:block `}
      >
        <span
          className={`absolute top-0 left-0 w-full h-[1vw] bg-white z-[2] tran scaleDownLeft ${
            en ? "origin-left" : "origin-right"
          } delay-[5800ms] `}
        ></span>
        <span
          className={`absolute top-0 ${
            en ? "left-0" : "right-0"
          } w-[1.2vw] h-full bg-white z-[2] tran scaleDownUp origin-bottom delay-[6100ms] `}
        ></span>
        <img
          src="/images/be-careful/scammer-icons/arrows/2.svg"
          alt="timelineIcon"
          className={`w-full flipped`}
        />
      </div>
      <div className="absolute md:top-[7.13541666667vw] leftRightFixer1">
        <div>
          <div className="w-[19.2708333333vw] flex justify-end">
            <ScammerInfo
              number={"9"}
              paragraph={data?.step9}
              width="md:w-[15vw]"
              classes={`fade-up  delay-[6300ms] ${en ? "pr-[3vw]" : ""}`}
            />
          </div>
          <div className="iconAnimate inline-block">
            <img
              src="/images/be-careful/scammer-icons/4.svg"
              alt="icons"
              className="md:w-[4.79166666667vw] w-[60px] opacity-fade trans delay-[6500ms]  mt-[1.77083333333vw] md:mx-[0.83333333333vw]"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center md:gap-x-[0.83333333333vw] gap-x-[12px]">
            <div className="relative md:w-[5.36458333333vw] w-[60px] ">
              <img
                src="/images/be-careful/scammer-icons/5.svg"
                alt="icons"
                className="md:w-[5.36458333333vw] w-[60px] flipped opacity-fade tran delay-[6700ms]"
              />
            </div>
            <div>
              <ScammerInfo
                number="10"
                paragraph={data?.step10}
                width="md:w-[11.71875vw]"
                classes={"fade-up delay-[7100ms]"}
              />
            </div>
          </div>
        </div>
        <div className="iconAnimate inline-block">
          <img
            src="/images/be-careful/scammer-icons/6.svg"
            alt="icons"
            className="md:w-[4.79166666667vw] w-[60px]  md:mx-[0.83333333333vw] opacity-fade tran delay-[6900ms]"
          />
        </div>

        <img
          src="/images/be-careful/scammer-icons/5.svg"
          alt="icons"
          className="md:w-[5.36458333333vw] w-[60px] flipped mt-[0.83333333333vw] md:mx-[0.625vw] opacity-fade tran delay-[7300ms]"
        />
        <div className="mt-[0.83333333333vw]">
          <div className="flex items-center justify-center md:gap-x-[0.83333333333vw] gap-x-[12px]">
            <div className="relative md:w-[3.4375vw] w-[35px]  iconAnimate">
              <img
                src="/images/be-careful/scammer-icons/7.svg"
                alt="icons"
                className="md:w-[3.4375vw] w-[35px]  opacity-fade tran delay-[7500ms]"
              />
            </div>
            <div>
              <ScammerInfo
                number="11"
                paragraph={data?.step11}
                width="md:w-[11.71875vw]"
                classes={"fade-up delay-[7700ms]"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-start md:gap-x-[0.83333333333vw] gap-x-[12px]">
        <div className="flex items-start md:gap-x-[0.83333333333vw] gap-x-[12px]">
          <div className="relative md:w-[6.25vw] w-[60px] opacity-fade tran ">
            <img
              src="/images/be-careful/scammer-icons/1.svg"
              alt="icons"
              className="md:w-[6.25vw] w-[60px] iconAnimate "
            />
            <span className="font-[800] block text-center mt-[8px] md:mt-[0.72916666666vw] ">
              {en
                ? "Scammer"
                : `   المحتال
           `}{" "}
            </span>
            <div
              className={`${
                en ? "left-[2.5vw]" : "right-[2.5vw]"
              } md:min-w-[28.2291666667vw] md:w-[28.2291666667vw] md:h-[40.2083333333vw] absolute md:top-[8.64583333333vw] `}
            >
              <span className="w-[1.2vw] absolute h-[11.2vw] bottom-0 leftRightFixer1 bg-white z-[2]  scaleDownUp  tran delay-[5600ms] origin-top"></span>
              <span
                className={`w-[28.2vw] absolute h-[1.5vw] bottom-0 leftRightFixer1 bg-white ${
                  en ? "origin-left" : "origin-right"
                } scaleDownLeft  transition-all duration-[500ms] delay-[5200ms] z-[2]`}
              ></span>
              <span className="w-[1.6vw] absolute h-[29vw] top-0 leftRightFixer1 bg-white z-[2] tran origin-top scaleDownUp delay-[4000ms]"></span>

              <img
                src="/images/be-careful/scammer-icons/arrows/5.svg"
                alt="icons"
                className="w-full h-full  
                                        absolute bottom-0 leftRightFixer2 flipped"
              />
              <div
                className={`${
                  en ? "left-[0.625vw]" : "right-[0.625vw]"
                } absolute md:bottom-[11.1979166667vw] `}
              >
                <div
                  className={`${
                    en ? "md:mr-[0.72916666666vw]" : "md:ml-[0.72916666666vw] "
                  } flex justify-end md:pb-[0.52083333333vw]`}
                >
                  <ScammerInfo
                    number="6"
                    paragraph={data?.step6}
                    classes={"fade-up delay-[3800ms]"}
                  />
                </div>
                <div className="scaleLeft scaleLeft Chutya transition-all duration-[400ms] delay-[3600ms]">
                  <img
                    src="/images/be-careful/scammer-icons/arrows/6.svg"
                    alt="timelineIcon"
                    className=" md:w-[21.1458333333vw] hidden md:block"
                  />
                </div>
              </div>
              <div
                className={`${
                  en
                    ? "md:right-[-2.38541666667vw]"
                    : "md:left-[-2.38541666667vw]"
                } absolute md:bottom-[1.45833333333vw] `}
              >
                <ScammerInfo
                  number="8"
                  paragraph={data?.step8}
                  classes={"fade-up delay-[5400ms]"}
                />
              </div>
            </div>
          </div>
          <div>
            <ScammerInfo
              number="1"
              paragraph={data?.step1}
              classes="fade-up delay-[400ms]"
            />
            {/* <img
                      src="/images/be-careful/scammer-icons/arrows/1.svg"
                      alt="timelineIcon"
                      className={`  md:w-[17.1875vw] hidden md:block  `}
                    /> */}
            <div className="flipped">
              <svg
                className={`  md:w-[17.1875vw] hidden chomu md:block  scaleRight tran delay-[200ms]`}
                viewBox="0 0 332 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM2 13.5H332V10.5H2V13.5Z"
                  fill="#89191B"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="md:mt-[0.88541666666vw] md:mx-[0.83333333333vw] text-[16px]  md:text-[0.9375vw] font-[500] text-[#333333]">
        <div className="md:w-[17.1875vw] bg-[#89191B1A] md:my-[unset] my-[12px] opacity-fade tran delay-[800ms]">
          <span className="block md:py-[1.14583333333vw] py-[12px] w-[85%] mx-[auto] text-[16px]  md:text-[0.9375vw] font-[500] text-[#333333]">
            {data?.step1message}
          </span>
        </div>
        <div className="md:w-[17.1875vw]">
          <div
            className={`${
              en
                ? " md:ml-[0.83333333333vw] ml-[12px]"
                : " md:mr-[0.83333333333vw] mr-[12px]"
            } flex items-center   md:gap-x-[0.41666666666vw] gap-x-[12px]  md:py-[0.83333333333vw] py-[12px]`}
          >
            <img
              src="/images/be-careful/scammer-icons/arrows/3.svg"
              alt="timelineIcon"
              className=" md:h-[6.77083333333vw] hidden md:block  scaleTop tran delay-[1500ms]"
            />
            <ScammerInfo
              number="3"
              paragraph={data?.step3}
              width="md:w-[14.6875vw] fade-up delay-[1700ms] "
            />
          </div>
          <div className="md:w-[17.1875vw] bg-[#89191B1A] md:my-[unset] my-[12px] fade-up tran delay-[1900ms]">
            <div
              className={`flex flex-col  gap-y-[12px] ${
                en
                  ? "md:py-[0.4vw] md:gap-y-[0.43333333333vw]"
                  : "md:gap-y-[0.83333333333vw] md:py-[1.14583333333vw]"
              } py-[12px] w-[85%] mx-[auto]`}
            >
              <div
                className={`flex ${
                  en
                    ? " md:gap-x-[0.4333333333vw] gap-x-[12px]"
                    : " md:gap-x-[0.83333333333vw] gap-x-[12px]"
                }  `}
              >
                <div className="flex gap-x-[4px] md:gap-x-[unset]">
                  <span className="block md:w-[8.22916666667vw] ">
                    {en ? "Scammer's IBAN number:" : "رقم آيبان المحتال"}
                  </span>
                  <span>:</span>
                </div>
                <span className="ltr">SA ****</span>
              </div>
              <div
                className={`flex ${
                  en
                    ? " md:gap-x-[0.4333333333vw] gap-x-[12px]"
                    : " md:gap-x-[0.83333333333vw] gap-x-[12px]"
                }  `}
              >
                <div className="flex gap-x-[4px] md:gap-x-[unset]">
                  <span className="block md:w-[8.22916666667vw] ">
                    {en ? "Beneficiary Name" : "اسم المستفيد"}
                  </span>
                  <span>:</span>
                </div>
                <span className="block">
                  {en ? "Official Name" : "جهة رسمية"}
                </span>
              </div>
              <div
                className={`flex ${
                  en
                    ? " md:gap-x-[0.4333333333vw] gap-x-[12px]"
                    : " md:gap-x-[0.83333333333vw] gap-x-[12px]"
                }  `}
              >
                <div className="flex gap-x-[4px] md:gap-x-[unset]">
                  <span className="block md:w-[8.22916666667vw] ">
                    {en ? "Beneficiary Activation" : "تفعيل المستفيد"}
                  </span>
                  <span>:</span>
                </div>
                <img
                  src="/images/be-careful/scammer-icons/arrows/tick.svg"
                  alt="timelineIcon"
                  className="  md:w-[1.61458333333vw] w-[24px]"
                />
              </div>
              <div
                className={`flex ${
                  en
                    ? " md:gap-x-[0.4333333333vw] gap-x-[12px]"
                    : " md:gap-x-[0.83333333333vw] gap-x-[12px]"
                }  `}
              >
                <div className="flex gap-x-[4px] md:gap-x-[unset]">
                  <span className="block md:w-[8.22916666667vw] ">
                    {en ? "Transferring fee" : "تحويل مبلغ الرسوم"}
                  </span>
                  <span>:</span>
                </div>
                <span>{en ? "10 SAR" : "10 ريال"}</span>
              </div>
            </div>
          </div>
          <div
            className={`${
              en
                ? " md:ml-[0.83333333333vw] ml-[12px]"
                : " md:mr-[0.83333333333vw] mr-[12px]"
            } flex items-center   md:gap-x-[0.41666666666vw] gap-x-[12px]  md:py-[0.83333333333vw] py-[12px]`}
          >
            <img
              src="/images/be-careful/scammer-icons/arrows/3.svg"
              alt="timelineIcon"
              className=" md:h-[6.77083333333vw] hidden md:block   scaleTop tran delay-[2100ms] "
            />
            <ScammerInfo
              number="4"
              paragraph={data?.step4}
              width="md:w-[14.6875vw] fade-up delay-[2300ms]"
            />
          </div>
          <div className="md:w-[17.1875vw] bg-[#89191B1A] md:my-[unset] my-[12px]  fade-up tran delay-[2500ms]">
            <div
              className={`flex flex-col  gap-y-[12px] ${
                en
                  ? "md:py-[0.4vw] md:gap-y-[0.43333333333vw]"
                  : "md:gap-y-[0.83333333333vw] md:py-[1.14583333333vw]"
              } py-[12px] w-[85%] mx-[auto]`}
            >
              <div
                className={`flex ${
                  en
                    ? " md:gap-x-[0.4333333333vw] gap-x-[12px]"
                    : " md:gap-x-[0.83333333333vw] gap-x-[12px]"
                }  `}
              >
                <div className="flex gap-x-[4px] md:gap-x-[unset]">
                  <span className="block md:w-[8.22916666667vw] ">
                    {en ? "Bank name" : "اسم البنك"}
                  </span>
                  <span>:</span>
                </div>
                <span>XYZ</span>
              </div>
              <div
                className={`flex ${
                  en
                    ? " md:gap-x-[0.4333333333vw] gap-x-[12px]"
                    : " md:gap-x-[0.83333333333vw] gap-x-[12px]"
                }  `}
              >
                <div className="flex gap-x-[4px] md:gap-x-[unset]">
                  <span className="block md:w-[8.22916666667vw] ">
                    {en ? "Username" : "اسم المستخدم"}
                  </span>
                  <span>:</span>
                </div>
                <span>******</span>
              </div>
              <div
                className={`flex ${
                  en
                    ? " md:gap-x-[0.4333333333vw] gap-x-[12px]"
                    : " md:gap-x-[0.83333333333vw] gap-x-[12px]"
                }  `}
              >
                <div className="flex gap-x-[4px] md:gap-x-[unset]">
                  <span className="block md:w-[8.22916666667vw] ">
                    {en ? "Password" : "كلمة المرور"}
                  </span>
                  <span>:</span>
                </div>
                <span>******</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-start md:gap-x-[0.83333333333vw] gap-x-[12px]">
        <div className="md:mt-[-1.40625vw]">
          <ScammerInfo
            number="2"
            paragraph={data?.step2}
            classes={"fade-up delay-[1300ms]"}
          />
          <div className="scaleLeft delay-[1100ms] tran">
            <img
              src="/images/be-careful/scammer-icons/arrows/1.svg"
              alt="timelineIcon"
              className={`${
                en ? "" : "transform scale-x-[-1]"
              } md:w-[17.1875vw] hidden md:block `}
            />
          </div>
        </div>
        <div className="relative md:w-[6.25vw] w-[60px]  ">
          <div className="opacity-fade  tran delay-[900ms]">
            <img
              src="/images/be-careful/scammer-icons/2.svg"
              alt="icons"
              className="md:w-[6.25vw] w-[60px] iconAnimate "
            />
            <span className="font-[800] block text-center   mt-[8px] md:mt-[0.72916666666vw] ">
              {en
                ? "Victim"
                : `    الضحية
          `}{" "}
            </span>
          </div>

          <div
            className={`${
              en ? "md:right-[2.86458333333vw]" : "md:left-[2.86458333333vw]"
            } md:min-w-[28.2291666667vw] md:w-[28.2291666667vw] md:h-[40.2083333333vw]  absolute md:top-[8.64583333333vw] `}
          >
            <span className="w-[1.2vw] absolute h-[11.2vw] bottom-0 leftRightFixer2 bg-white z-[2] transition-all duration-[500ms] origin-bottom scaleDownUp delay-[4200ms]"></span>
            <span
              className={`w-[28.2vw] absolute h-[1.5vw] bottom-0 leftRightFixer2 bg-white z-[2] tran ${
                en ? "origin-left" : "origin-right"
              } scaleDownLeft delay-[4400ms]`}
            ></span>
            <span className="w-[0.3vw] absolute h-[29vw] top-0 leftRightFixer2 bg-white z-[2] tran origin-bottom scaleDownUp delay-[2700ms]"></span>
            <img
              src="/images/be-careful/scammer-icons/arrows/4.svg"
              alt="icons"
              className="w-full h-full    absolute bottom-0 leftRightFixer2 flipped"
            />
            <div
              className={`${
                en
                  ? "md:left-[-5.20833333333vw]"
                  : "md:right-[-5.20833333333vw]"
              } w-[4.79166666667vw] h-[4.79166666667vw] flipped absolute md:bottom-[-0.72916666666vw] opacity-fade tran  delay-[4800ms] `}
            >
              <img
                src="/images/be-careful/scammer-icons/3.svg"
                alt="icons"
                className="w-full iconAnimate"
              />
            </div>

            <div
              className={`${
                en ? "right-[0.05vw]" : "left-[0.05vw]"
              } absolute md:bottom-[10.5208333333vw] `}
            >
              <div
                className={`${
                  en ? "ml-[0.72916666666vw]" : "mr-[0.72916666666vw]"
                }`}
              >
                <ScammerInfo
                  number="5"
                  paragraph={data?.step5}
                  classes={"fade-up delay-[3400ms]"}
                />
              </div>
              <div className="tran scaleLeft scaleLeft Chutya delay-[3200ms]">
                <img
                  src="/images/be-careful/scammer-icons/arrows/1.svg"
                  alt="timelineIcon"
                  className={`${
                    en ? "" : "transform scale-x-[-1]"
                  } md:w-[21.1458333333vw] hidden md:block z-[-1] relative`}
                />
              </div>
            </div>
            <div
              className={`${
                en ? "left-[1.22916666666vw]" : "right-[0.72916666666vw]"
              } absolute md:bottom-[1.45833333333vw] `}
            >
              <ScammerInfo
                number="7"
                paragraph={data?.step7}
                classes={"fade-up delay-[4600ms]"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLineDeskstop;
