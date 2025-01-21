import Image from "next/image";
import ChangesBackground from "./ChangesBackground";

const ChangeSection = ({ en, title, desc, img, alt }) => {
  return (
    <section className="relative flex items-end md:min-h-screen">
      <ChangesBackground en={en} img={img} alt={alt} title={title} />
      <div className="md:pt-[4vw] relative myContainer flex flex-col items-start pb-[80px] pt-[120px]  md:pb-[17vh]">
        <div
          data-aos="fade"
          className=" relative  w-[58px] h-[47.84px]  md:w-[4.94791666667vw] md:h-[4.05520833333vw] mb-[40px] md:mb-[5%]"
        >
          <Image
            loading="lazy"
            src="/images/icons/brandIcon.svg"
            fill
            alt="brandIcon"
            className="flipped"
          />
        </div>
        <div className="relative">
          <h2
            data-aos="fade-up"
            className={`text-[8.205128205128205vw] leading-[10.76923076923077vw] md:text-[2.96875vw] md:leading-[4.16666666667vw] font-[700]`}
          >
            {title}
          </h2>
          <div
            data-aos="fade"
            data-aos-delay="800"
            className={`${
              en ? "right-[0]" : "md:left-[-0.83333333333vw] left-[-22px]"
            } w-[80px] h-[10px] md:w-[6.04166666667vw] md:h-[0.83333333333vw] absolute bottom-[-6px] md:bottom-0`}
          >
            <Image src="/images/icons/changesLines.svg" fill alt="changes" />
          </div>
        </div>
        <div
          data-aos="fade-down"
          className="para24 md:w-[35vw] mt-[14px] md:mt-[2vw]"
          dangerouslySetInnerHTML={{ __html: desc }}
        ></div>
      </div>
    </section>
  );
};

export default ChangeSection;
