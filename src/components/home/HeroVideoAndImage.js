import Image from "next/image";
import Wrapper from "../common/Wrapper";

const HeroVideoAndImage = ({ img, videoData, alt, title, mobImage }) => {
  return (
    <Wrapper>
      <img
        src={img}
        alt={alt ? alt : title}
        className={`absolute object-cover  flipped w-full h-full ${
          mobImage ? " hidden md:block " : ""
        }`}
      />
      {mobImage && (
        <img
          src={mobImage}
          alt={alt ? alt : title}
          className="absolute object-cover  flipped w-full h-full md:hidden"
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
  );
};

export default HeroVideoAndImage;
