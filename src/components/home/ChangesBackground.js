import Image from "next/image";

const ChangesBackground = ({ en, img, alt, title }) => {
  return (
    <>
      <div
        className={`w-full md:w-[57vw] bg-[#f0f6f5]  h-full absolute top-0 ${
          en ? "left-0" : "right-0"
        }`}
      ></div>
      <div
        className={`w-[43vw]  hidden  h-full absolute top-0 md:flex justify-center items-center ${
          en ? "right-0" : "left-0"
        }`}
      >
        <div
          data-aos="fade"
          data-aos-delay="800"
          className="relative w-[38.0208333333vw] h-[32.7083333333vw]"
        >
          {/* <Image
            src="/images/home/changes.png"
            fill
            className="object-contain"
            alt="changes"
          /> */}
          <img
            src={img}
            className="object-contain w-full h-full"
            alt={alt ? alt : title}
          />
        </div>
      </div>
    </>
  );
};

export default ChangesBackground;
