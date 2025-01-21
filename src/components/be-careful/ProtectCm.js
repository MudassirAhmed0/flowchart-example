const ProtectCm = ({ en, title, list, data }) => {
  return (
    <div className="relative">
      <div className="w-full h-full overflow-hidden  absolute top-0 leftRightFixer1">
        <img
          src="/images/be-careful/protect-cm/design-bg.jpg"
          alt={title}
          loading="lazy"
          className="flipped absolute top-0 leftRightFixer1 w-full h-full object-cover"
        />
      </div>
      <div className="relative z-[2] myContainer md:py-[8.4375vw] py-[80px] text-[#FFFFFF]">
        <h1 data-aos="fade-up" className="md:w-[43.3333333333vw] heading56  ">
          {title}
        </h1>
        <div className="md:mt-[2.70833333333vw] mt-[30px]">
          <div className="flex flex-col md:gap-y-[1.66666666667vw] gap-y-[24px]">
            {list?.map((item, index) => (
              <div key={index} data-aos="fade-up" className={` flex flex-col`}>
                <span className="text-[#FFC162] heading4 font-[700]">
                  {index + 1}.
                </span>
                <p className="text-[16px]  md:text-[1.45833333333vw] font-[700] text-[#FFFFFF]">
                  {item}
                </p>
              </div>
            ))}
            {/* <div data-aos="fade-up" className={` flex flex-col`}>
              <span className="text-[#FFC162] heading4 font-[700]">1.</span>
              <p className="text-[16px]  md:text-[1.45833333333vw] font-[700] text-[#FFFFFF]">
                {en
                  ? "Contact the financial entity in case of fraud related to your bank account"
                  : "التواصل مع الجهة المالية في حال كان الاحتيال متعلّق بحسابك البنكي"}
              </p>
            </div>
            <div data-aos="fade-up" className={` flex flex-col`}>
              <span className="text-[#FFC162] heading4 font-[700]">2.</span>
              <p className="text-[16px]  md:text-[1.45833333333vw] font-[700] text-[#FFFFFF]">
                {en
                  ? "Notify the competent security authorities through:"
                  : "قم بإبلاغ الجهات الأمنية المختصة من خلال:"}
              </p>
            </div> */}
          </div>
          <div
            data-aos="fade-up"
            className="para24 font-[700]   md:pt-[3.203125vw] pt-[24px] "
          >
            <div className=" flex flex-col md:flex-row gap-y-[30px] md:gap-x-[2.5vw]">
              <div
                className={`${
                  en ? "md:pr-[2.44791666667vw]" : "md:pl-[2.44791666667vw]"
                } relative flex items-center md:gap-x-[1vw] gap-x-[16px]`}
              >
                {/* <img
                  src={data?.img1}
                  alt={data?.text1}
                  loading="lazy"
                  className="md:w-[7.29166666667vw] md:h-[7.29166666667vw]  w-[80px] h-[80px]"
                /> */}

              <img
                  src={"/images/be-careful/protect-cm/batch/1.svg"}
                  alt={data?.text1}
                  loading="lazy"
                  className="md:w-[7.29166666667vw] md:h-[7.29166666667vw]  w-[80px] h-[80px]"
                />
                <span className="block md:w-[7.29166666667vw]">
                  {data?.text1}
                </span>
                <span className="absolute top-[50%] transform translate-y-[-50%] leftRightFixer2 bg-[#FFFFFF] h-[10.8854166667vw] w-[2px] hidden md:block"></span>
              </div>
              <div
                className={`${
                  en ? "md:pr-[2.44791666667vw]" : "md:pl-[2.44791666667vw]"
                } relative flex items-center  md:gap-x-[1vw] gap-x-[16px]`}
              >
                <img
                  src={"/images/be-careful/protect-cm/batch/Absher.svg.png"}
                  alt={data?.text2}
                  loading="lazy"
                  className="md:w-[5vw]   w-[80px] "
                />
                <span className="block md:w-[7.29166666667vw]">
                  {data?.text2}
                </span>
                <span className="absolute top-[50%] transform translate-y-[-50%] leftRightFixer2 bg-[#FFFFFF] h-[10.8854166667vw] w-[2px] hidden md:block"></span>
              </div>
              <div
                className={`${
                  en ? "md:pr-[2.44791666667vw]" : "md:pl-[2.44791666667vw]"
                } relative flex items-center md:gap-x-[1vw] gap-x-[16px]`}
              >
                <img
                  src={data?.img3}
                  alt="phone"
                  loading="lazy"
                  className="md:w-[6.48333333333vw] flipped  w-[70px] "
                />
                <div>
                  <div className="flex flex-col">
                    <span className="font-[500] text-[#FFC162] text43">
                      {data?.text3number1}
                    </span>
                    <span className="font-[400]">{data?.text3message1}</span>
                  </div>
                  <div
                    className="flex flex-col
                                    md:mt-[1.25vw] mt-[16px]"
                  >
                    <span className="font-[500] text-[#FFC162] text43">
                      {data?.text3number2}
                    </span>
                    <span className="font-[400]">{data?.text3message2}</span>
                  </div>
                </div>
                <span className="absolute top-[50%] transform translate-y-[-50%] leftRightFixer2 bg-[#FFFFFF]  h-[10.8854166667vw] w-[2px] hidden md:block"></span>
              </div>
              <div
                className={`  relative flex items-center md:gap-x-[0.83333333333vw] gap-x-[16px]`}
              >
                <img
                  src={data?.img4}
                  alt="contact"
                  loading="lazy"
                  className="md:w-[6vw] flipped   w-[70px] "
                />
                <div>
                  <div className="flex flex-col">
                    <span className="md:w-[10.7291666667vw]">
                      {data?.text4message1}
                    </span>
                  </div>
                  <div className="flex flex-col md:mt-[1.25vw] mt-[16px]">
                    <span className="font-[500] text-[#FFC162] text43">
                      {data?.text4message2}
                    </span>
                    <span className="font-[400]">{data?.text4message3}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProtectCm;
