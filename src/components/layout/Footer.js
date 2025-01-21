import getGlobalData from "@/lib/data-hooks/getGlobalData";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

const Footer = async ({ en }) => {
  const { globel } = await getGlobalData(!en);
  return (
    <footer className="">
      <div className="bg-[#234a55] py-[24px] md:py-[1vw] text-[12px] md:text-[1.1vw] text-white">
        <div className="myContainer flex flex-col md:flex-row gap-y-[16px] justify-between">
          <span className="text-white">{globel?.site_address}</span>
          <a
            href={`tel:${globel?.phone_number}`}
            className="flex gap-x-[5px] md:gap-x-[0.3vw]"
          >
            <span className="font-[700]">{en ? "Phone" : "الهاتف"}:</span>
            <span>{globel?.phone_number}</span>
            {/* <span
              className={`font-[700] ${
                en ? " ml-[15px] md:ml-[0.5vw] " : " mr-[15px] md:mr-[0.5vw] "
              }`}
            >
              {en ? "Ex" : "تحويلة"}:
            </span>
            <span> {globel?.extension}</span> */}
          </a>

          <a
            href="mailto:info@saudibanks.com.sa"
            className="flex gap-x-[5px] md:gap-x-[0.3vw] md:w-[25vw]"
          >
            <span className="font-[700]">
              {" "}
              {en ? "Email Address" : "البريد الإلكتروني"}:{" "}
            </span>
            <span>{globel?.email_address}</span>
          </a>
        </div>
      </div>
      <div className="py-[40px] md:pb-[3vw] md:pt-[5vw]">
        <div className="myContainer flex flex-col md:flex-row gap-y-[40px] justify-between flex-wrap md:flex-nowrap">
          <div className="flex justify-center items-center w-full md:w-[29.7078125vw]">
            <Link
              href={en ? "/en/" : "/"}
              className="relative w-[190px] h-[73px] md:w-[14.5833333333vw] md:h-[5.54036458333vw]"
            >
              <Image src="/images/footerLogo.svg" fill alt="Footer Logo" />
            </Link>
          </div>
          <div className="flex items-center  justify-center w-full md:w-[unset] gap-x-[16px] md:gap-x-[1vw]">
            <a target="_blank" href={globel?.twitter_url}>
              {/* <FaTwitter
                className=" w-[25px] md:w-[2vw] hover:opacity-[0.7]"
                color="#234A55"
              /> */}
              <img
                className=" w-[18px]  hover:opacity-[0.7]"
                src="/images/icons/twitter.svg"
                alt="twitter"
              />
            </a>
            <a target="_blank" href={globel?.facebook_url}>
              <FaFacebookF
                className=" w-[25px] md:w-[2vw] hover:opacity-[0.7]"
                color="#234A55"
              />
            </a>
            <a target="_blank" href={globel?.instagram_url}>
              <FaInstagram
                className=" w-[25px] md:w-[2vw] hover:opacity-[0.7]"
                color="#234A55"
              />
            </a>
            <a target="_blank" href={globel?.youtube_url}>
              <FaYoutube
                className=" w-[25px] md:w-[2vw] hover:opacity-[0.7]"
                color="#234A55"
              />
            </a>
            <a target="_blank" href={globel?.linkedin_url}>
              <FaLinkedin
                className=" w-[25px] md:w-[2vw] hover:opacity-[0.7]"
                color="#234A55"
              />
            </a>
            <a target="_blank" href={globel?.ticktok_url}>
              <FaTiktok
                className=" w-[25px] md:w-[2vw] hover:opacity-[0.7]"
                color="#234A55"
              />
            </a>
          </div>

          <p
            className={` md:text-[1.2vw] text-[14px] text-center  md:leading-[1.8vw] md:w-[25.5vw] ${
              en ? " md:text-left " : " md:text-right "
            }`}
          >
            {en
              ? `Copyright © 2022 Saudi Banks Media and Awareness Committee`
              : `الحقوق محفوظة © 2024 `}
            <br />
            {en ? "" : " لجنة الإعلام والتوعية المصرفية بالبنوك السعودية"}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
