import React from "react";
import Link from "next/link";
import Wrapper from "@/components/common/Wrapper";
import Image from "next/image";
const SubPageHero = ({
  span,
  heading,
  paragraph,
  img,
  tag,
  warning,
  mobileBanner,
  mobImage,
  alt,
  videoData,
}) => {
  return (
    <section className="md:h-[56.25vw] h-[550px] max-h-[100vh] md:max-h-[unset] relative">
      <div className="flex items-end md:pb-[16.7708333333vw] pb-[20%] h-full">
        <Wrapper>
          <span
            className={`${
              tag && "opacity-[0.2]"
            } hero__Overlayl z-[2] pointer-events-none`}
          ></span>
          <span className="absolute h-full w-full top-0 leftRightFixer1 bg-[#244A54] bg-opacity-[0.2] z-[3] pointer-events-none"></span>
          {warning && (
            <>
              <img
                src={"/images/be-careful/be-careful-bg.png"}
                alt={alt ? alt : heading}
                className="hidden w-full h-full object-cover"
              />
              {/* <img
                src={"/images/be-careful/warning.png"}
                alt="warning"
                className="absolute w-[150px] top-[100px] left-[50%] transform translate-x-[-50%] md:hidden"
              /> */}
              <img
                src={mobileBanner}
                alt={alt ? alt : heading}
                className="absolute w-full object-cover top-0 left-0  md:hidden"
              />
            </>
          )}
          {/* <img
            src={img}
            alt={alt ? alt : heading}
            className={`object-cover w-full h-full z-[-1] flipped ${
              warning ? "hidden md:block" : ""
            }`}
          /> */}
          <img
            src={img}
            alt={alt ? alt : heading}
            className={`absolute object-cover  z-[-1] flipped w-full h-full ${
              mobImage ? " hidden md:block " : ""
            }`}
          />
          {mobImage && (
            <img
              src={mobImage}
              alt={alt ? alt : heading}
              className="absolute object-cover  z-[-1] flipped w-full h-full md:hidden"
            />
          )}
          {videoData?.isVideo && (
            <video
              src={videoData?.video}
              className={`w-full h-full top-0 left-0 absolute object-cover flipped ${
                videoData.isMobileVideo ? " hidden md:block " : ""
              }`}
              muted
              autoPlay
              loop
              playsInline
            ></video>
          )}
          {videoData?.isMobileVideo && (
            <video
              src={videoData?.mobileVIdeo}
              className="w-full h-full top-0 left-0 absolute object-cover flipped md:hidden"
              muted
              autoPlay
              loop
              playsInline
            ></video>
          )}
        </Wrapper>

        <div className="myContainer relative text-white z-[3] ">
          {tag ? (
            <img
              src="/images/icons/hero-logo.svg"
              alt="logo"
              data-aos="fade"
              data-aos-delay={400}
              className="md:w-[6.25vw] w-[55px] flipped md:mb-[2.70833333333vw] mb-[20px]"
            />
          ) : (
            ""
          )}
          <div className="md:w-[43.0833333333vw] flex flex-col md:gap-y-[1.25vw] gap-y-[12px]">
            <div
              data-aos="fade"
              data-aos-delay={200}
              className="flex items-end md:gap-x-[0.10416666666vw] gap-x-[6px]"
            >
              <Link
                href="/"
                className="md:w-[2.5vw] md:h-[2.5vw] w-[34px] h-[34px] relative block flipped"
              >
                <Image src="/images/icons/home.svg" fill alt="home-icon" />
              </Link>
              <img
                src="/images/icons/leftChevron.svg"
                alt="Chevron"
                className="md:w-[1.66666666667vw] w-[24px] flipped"
              />
              <span className="para24">{span}</span>
            </div>
            <h1 data-aos="fade-up" className="heading56 ">
              {heading}
            </h1>
            <p id="subPagePara" data-aos="fade-down" className="para26">
              {paragraph}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubPageHero;
