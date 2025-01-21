import React from "react";
import ScammerInfo from "./ScammerInfo";
import Content from "./Content";

const Scammer = ({ en }) => {
  return (
    <section>
      {/* <span className='w-full h-[2px] bg-[#000] top-[50%] fixed left-0'></span> */}
      <div>
        <div className="md:pb-[9.375vw] pb-[80px]">
          <Content />
          <div className="md:pb-[8.33333333333vw] pb-[80px] md:w-[84.9479166667vw] w-[90vw] mx-[auto] md:mt-[3.75vw] mt-[40px] ">
            <div className="flex md:justify-end items-start relative text-[16px]  md:text-[0.9375vw] font-[500] text-[#333333]">
              <div
                className={`${
                  en ? "md:left-[2.65625vw]" : "md:right-[2.65625vw] "
                } absolute   w-[14.0625vw] md:top-[4.0625vw]  hidden md:block `}
              >
                <span className="absolute top-0 left-0 w-full h-[1vw] bg-white z-[2] tran scaleDown origin-right delay-[3300ms] "></span>
                <span className="absolute top-0 right-0 w-[1vw] h-full bg-white z-[2] tran scaleDown origin-bottom delay-[3500ms] "></span>
                <img
                  src="/images/be-careful/scammer-icons/arrows/2.svg"
                  alt="Timeline Icons"
                  className={`w-full`}
                />
              </div>
              <div className="absolute md:top-[7.13541666667vw] leftRightFixer1">
                <div>
                  <div className="w-[19.2708333333vw] flex justify-end">
                    <ScammerInfo
                      number={"9"}
                      paragraph="استخدام رمز التحقق و الدخول علي الخدمات البنكية الالكترونية و غالبا من خارج المملكة و تنفيذ عمليات مالية"
                      width="md:w-[15vw]"
                      classes={"fade-up  delay-[3600ms]"}
                    />
                  </div>
                  <img
                    src="/images/be-careful/scammer-icons/4.svg"
                    alt="icons"
                    className="md:w-[4.79166666667vw] w-[60px] opacity-fade trans delay-[3800ms] flipped mt-[1.77083333333vw] md:mx-[0.83333333333vw]"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-center md:gap-x-[0.83333333333vw] gap-x-[12px]">
                    <div className="relative md:w-[5.36458333333vw] w-[60px] ">
                      <img
                        src="/images/be-careful/scammer-icons/5.svg"
                        alt="icons"
                        className="md:w-[5.36458333333vw] w-[60px] flipped opacity-fade tran delay-[3900ms]"
                      />
                    </div>
                    <div>
                      <ScammerInfo
                        number="10"
                        paragraph="تنفيذ عمليات مالية قد تصل لأكثر من (200,000 ريال) لحسابات فتحت عن بعد  "
                        width="md:w-[11.71875vw]"
                        classes={"fade-up delay-[4000ms]"}
                      />
                    </div>
                  </div>
                </div>
                <img
                  src="/images/be-careful/scammer-icons/6.svg"
                  alt="icons"
                  className="md:w-[4.79166666667vw] w-[60px] flipped md:mx-[0.83333333333vw] opacity-fade tran delay-[4200ms]"
                />
                <img
                  src="/images/be-careful/scammer-icons/5.svg"
                  alt="icons"
                  className="md:w-[5.36458333333vw] w-[60px] flipped mt-[0.83333333333vw] md:mx-[0.625vw] opacity-fade tran delay-[4300ms]"
                />
                <div className="mt-[0.83333333333vw]">
                  <div className="flex items-center justify-center md:gap-x-[0.83333333333vw] gap-x-[12px]">
                    <div className="relative md:w-[3.4375vw] w-[35px] ">
                      <img
                        src="/images/be-careful/scammer-icons/7.svg"
                        alt="icons"
                        className="md:w-[3.4375vw] w-[35px] flipped opacity-fade tran delay-[4600ms]"
                      />
                    </div>
                    <div>
                      <ScammerInfo
                        number="11"
                        paragraph="تحويل المبالغ الناتجة عن عملية الاحتيال لخارح المملكة  "
                        width="md:w-[11.71875vw]"
                        classes={"fade-up delay-[4500ms]"}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start md:gap-x-[0.83333333333vw] gap-x-[12px]">
                <div className="flex items-start md:gap-x-[0.83333333333vw] gap-x-[12px]">
                  <div className="relative md:w-[6.25vw] w-[60px] ">
                    <img
                      src="/images/be-careful/scammer-icons/1.svg"
                      alt="icons"
                      className="md:w-[6.25vw] w-[60px] flipped opacity-fade tran"
                    />
                    <span className="font-[800] block text-center  mt-[8px] md:mt-[0.72916666666vw] opacity-fade tran">
                      المحتال
                    </span>
                    <div
                      className={`${
                        en ? "left-[2.5vw]" : "right-[2.5vw]"
                      } md:min-w-[28.2291666667vw] md:w-[28.2291666667vw] md:h-[40.2083333333vw] flipped  absolute md:top-[8.64583333333vw] `}
                    >
                      <span className="w-[1.2vw] absolute h-[11.2vw] bottom-0 right-0 bg-white z-[2]  scaleDown tran delay-[3250ms] origin-top"></span>
                      <span className="w-[28.2vw] absolute h-[1.5vw] bottom-0 right-0 bg-white origin-right scaleDown tran delay-[3100ms] z-[2]"></span>
                      <span className="w-[1.2vw] absolute h-[29vw] top-0 right-0 bg-white z-[2] tran origin-top scaleDown delay-[2600ms]"></span>

                      <img
                        src="/images/be-careful/scammer-icons/arrows/5.svg"
                        alt="icons"
                        className="w-full h-full flipped absolute bottom-0 leftRightFixer2"
                      />
                      <div
                        className={`${
                          en ? "left-[0.625vw]" : "right-[0.625vw]"
                        } absolute md:bottom-[11.1979166667vw] `}
                      >
                        <div
                          className={`${
                            en
                              ? "md:mr-[0.72916666666vw]"
                              : "md:ml-[0.72916666666vw]"
                          } flex justify-end md:pb-[0.52083333333vw]`}
                        >
                          <ScammerInfo
                            number="6"
                            paragraph="حصول المحتال علي بيانات الدخول البنكية من الضحية"
                            classes={"fade-up delay-[2500ms]"}
                          />
                        </div>
                        <div className="scaleLeft tran delay-[2400ms]">
                          <img
                            src="/images/be-careful/scammer-icons/arrows/6.svg"
                            alt="Timeline Icons"
                            className=" md:w-[21.1458333333vw] hidden md:block"
                          />
                        </div>
                      </div>
                      <div
                        className={`${
                          en
                            ? "md:right-[-3.38541666667vw]"
                            : "md:left-[-3.38541666667vw]"
                        } absolute md:bottom-[1.45833333333vw] `}
                      >
                        <ScammerInfo
                          number="8"
                          paragraph="حصول المحتال علي رمز التحقق"
                          classes={"fade-up delay-[3100ms]"}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <ScammerInfo
                      number="1"
                      paragraph="انشاء صفحة وهمية الكترونية"
                      classes="fade-up delay-[300ms]"
                    />
                    {/* <img
                      src="/images/be-careful/scammer-icons/arrows/1.svg"
                      alt="Timeline Icons"
                      className={`  md:w-[17.1875vw] hidden md:block  `}
                    /> */}
                    <svg
                      className={`  md:w-[17.1875vw] hidden md:block  scaleRight tran delay-[500ms]`}
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
              <div className="md:mt-[0.88541666666vw] md:mx-[0.83333333333vw] text-[16px]  md:text-[0.9375vw] font-[500] text-[#333333]">
                <div className="md:w-[17.1875vw] bg-[#89191B1A] md:my-[unset] my-[12px] fade-up tran delay-[1100ms]">
                  <span className="block md:py-[1.14583333333vw] py-[12px] w-[85%] mx-[auto] text-[16px]  md:text-[0.9375vw] font-[500] text-[#333333]">
                    سماسكوه, اجير, مدرسة تعلبم القيادة و غيره
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
                      alt="Timeline Icons"
                      className=" md:h-[6.77083333333vw] hidden md:block  scaleTop tran delay-[1300ms]"
                    />
                    <ScammerInfo
                      number="3"
                      paragraph="الية اضافة و تفعيل المستفيد و تحويل مبلغ الرسوم"
                      width="md:w-[14.6875vw] fade-up delay-[1200ms] "
                    />
                  </div>
                  <div className="md:w-[17.1875vw] bg-[#89191B1A] md:my-[unset] my-[12px] fade-up tran delay-[1500ms]">
                    <div className="flex flex-col md:gap-y-[0.83333333333vw] gap-y-[12px] md:py-[1.14583333333vw] py-[12px] w-[85%] mx-[auto]">
                      <div className="flex md:gap-x-[0.83333333333vw] gap-x-[12px]  ">
                        <div className="flex gap-x-[4px] md:gap-x-[unset]">
                          <span className="block md:w-[8.22916666667vw] ">
                            رقم آيبان المحتال
                          </span>
                          <span>:</span>
                        </div>
                        <span>SA ****</span>
                      </div>
                      <div className="flex md:gap-x-[0.83333333333vw] gap-x-[12px]  ">
                        <div className="flex gap-x-[4px] md:gap-x-[unset]">
                          <span className="block md:w-[8.22916666667vw] ">
                            اسم المستفيد
                          </span>
                          <span>:</span>
                        </div>
                        <span>جهة رسمية</span>
                      </div>
                      <div className="flex md:gap-x-[0.83333333333vw] gap-x-[12px]  ">
                        <div className="flex gap-x-[4px] md:gap-x-[unset]">
                          <span className="block md:w-[8.22916666667vw] ">
                            تفعيل المستفيد
                          </span>
                          <span>:</span>
                        </div>
                        <img
                          src="/images/be-careful/scammer-icons/arrows/tick.svg"
                          alt="Timeline Icons"
                          className="flipped md:w-[1.61458333333vw] w-[24px]"
                        />
                      </div>
                      <div className="flex md:gap-x-[0.83333333333vw] gap-x-[12px]  ">
                        <div className="flex gap-x-[4px] md:gap-x-[unset]">
                          <span className="block md:w-[8.22916666667vw] ">
                            تحويل مبلغ الرسوم
                          </span>
                          <span>:</span>
                        </div>
                        <span>10 ريال</span>
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
                      alt="Timeline Icons"
                      className=" md:h-[6.77083333333vw] hidden md:block   scaleTop tran delay-[1700ms] "
                    />
                    <ScammerInfo
                      number="4"
                      paragraph="يتم التوجيه الضحية علي صفحة لادخال البيانات البنكية بغرض التوثيق "
                      width="md:w-[14.6875vw] fade-up delay-[1600ms]"
                    />
                  </div>
                  <div className="md:w-[17.1875vw] bg-[#89191B1A] md:my-[unset] my-[12px]  fade-up tran delay-[1900ms]">
                    <div className="flex flex-col md:gap-y-[0.83333333333vw] gap-y-[12px] md:py-[1.14583333333vw] py-[12px] w-[85%] mx-[auto]">
                      <div className="flex md:gap-x-[0.83333333333vw] gap-x-[12px]  ">
                        <div className="flex gap-x-[4px] md:gap-x-[unset]">
                          <span className="block md:w-[8.22916666667vw] ">
                            اسم البنك
                          </span>
                          <span>:</span>
                        </div>
                        <span>XYZ</span>
                      </div>
                      <div className="flex md:gap-x-[0.83333333333vw] gap-x-[12px]  ">
                        <div className="flex gap-x-[4px] md:gap-x-[unset]">
                          <span className="block md:w-[8.22916666667vw] ">
                            اسم المستخدم
                          </span>
                          <span>:</span>
                        </div>
                        <span>******</span>
                      </div>
                      <div className="flex md:gap-x-[0.83333333333vw] gap-x-[12px]  ">
                        <div className="flex gap-x-[4px] md:gap-x-[unset]">
                          <span className="block md:w-[8.22916666667vw] ">
                            كلمة المرور
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
                    paragraph="يقوم الضحية بالدخول علي الصفحة الالكترونية"
                    classes={"fade-up delay-[700ms]"}
                  />
                  <div className="scaleLeft delay-[900ms] tran">
                    <img
                      src="/images/be-careful/scammer-icons/arrows/1.svg"
                      alt="Timeline Icons"
                      className={`${
                        en ? "" : "transform scale-x-[-1]"
                      } md:w-[17.1875vw] hidden md:block `}
                    />
                  </div>
                </div>
                <div className="relative md:w-[6.25vw] w-[60px] ">
                  <img
                    src="/images/be-careful/scammer-icons/2.svg"
                    alt="icons"
                    className="md:w-[6.25vw] w-[60px] flipped opacity-fade delay-[600ms] tran"
                  />
                  <span className="font-[800] block text-center             mt-[8px] md:mt-[0.72916666666vw] opacity-fade delay-[600ms] tran">
                    الضحية
                  </span>
                  <div
                    className={`${
                      en
                        ? "md:right-[2.86458333333vw]"
                        : "md:left-[2.86458333333vw]"
                    } md:min-w-[28.2291666667vw] md:w-[28.2291666667vw] md:h-[40.2083333333vw] flipped absolute md:top-[8.64583333333vw] `}
                  >
                    <span className="w-[1.2vw] absolute h-[11.2vw] bottom-0 left-0 bg-white z-[2] tran origin-bottom scaleDown delay-[2600ms]"></span>
                    <span className="w-[28.2vw] absolute h-[1.5vw] bottom-0 left-0 bg-white z-[2] tran origin-right scaleDown delay-[2800ms]"></span>
                    <span className="w-[0.2vw] absolute h-[29vw] top-0 left-0 bg-white z-[2] tran origin-bottom scaleDown delay-[2000ms]"></span>
                    <img
                      src="/images/be-careful/scammer-icons/arrows/4.svg"
                      alt="icons"
                      className="w-full h-full flipped  absolute bottom-0 leftRightFixer2"
                    />
                    <img
                      src="/images/be-careful/scammer-icons/3.svg"
                      alt="icons"
                      className={`${
                        en
                          ? "md:left-[-5.20833333333vw]"
                          : "md:right-[-5.20833333333vw]"
                      } w-[4.79166666667vw] h-[4.79166666667vw] flipped absolute md:bottom-[-0.72916666666vw] opacity-fade tran  delay-[3000ms] `}
                    />
                    <div
                      className={`leftRightFixer2 absolute md:bottom-[10.5208333333vw] `}
                    >
                      <div
                        className={`${
                          en ? "ml-[0.72916666666vw]" : "mr-[0.72916666666vw]"
                        }`}
                      >
                        <ScammerInfo
                          number="5"
                          paragraph="يقوم الضحية بإدخال اسم البنك و اسم المستخدم و كلمة المرور الخاضة بالدخول علي الخدمات البنكية الإلكترونية"
                          classes={"fade-up delay-[2300ms]"}
                        />
                      </div>
                      <div className="tran scaleLeft delay-[2200ms]">
                        <img
                          src="/images/be-careful/scammer-icons/arrows/1.svg"
                          alt="Timeline Icons"
                          className={`${
                            en ? "" : "transform scale-x-[-1]"
                          } md:w-[21.1458333333vw] hidden md:block`}
                        />
                      </div>
                    </div>
                    <div
                      className={`${
                        en
                          ? "left-[0.72916666666vw]"
                          : "right-[0.72916666666vw]"
                      } absolute md:bottom-[1.45833333333vw] `}
                    >
                      <ScammerInfo
                        number="7"
                        paragraph="يتم ادخال رمز التحقق للدخول علي الخدمات البنكية الإلكترونية"
                        classes={"fade-up delay-[2900ms]"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scammer;
