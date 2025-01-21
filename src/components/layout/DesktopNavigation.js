"use client";
import Image from "next/image";
import Link from "next/link";
import LangSwitcher from "./LangSwitcher";
import useAnimations from "@/hooks/useAnimations";
import { useEffect, useState } from "react";

const DesktopNavigation = ({ en, darkMode, hideSwitch, data, hideIt }) => {
  const [pathName, setPathName] = useState("");
  useAnimations();

  useEffect(() => {
    if (window) {
      const newP = window.location.pathname;
      let newPath;
      if (newP.includes("/news/")) {
        newPath = "news";
      } else {
        newPath = newP.includes("/ar/")
          ? newP.replace("/ar/", "")
          : newP.replace("/", "");
      }
      setPathName(newPath);
    }
  }, []);
  const openSidebar = () => {
    const body = document.querySelector("body");
    const sideBar = document.querySelector(".sideBar");
    const menu = document.querySelector(".menu");
    body.classList.toggle("active");
    sideBar.classList.toggle("active");
    menu.classList.toggle("active");
  };

  const links = [
    {
      label: en ? `Be-Careful` : `حملة خلك حريص`,
      path: en ? `/en/becareful` : `/becareful`,
      targetSegment: `becareful`,
    },
    {
      label: en ? `Leadership` : ` الفريق الاداري`,
      path: en ? `/en/leadership` : `/leadership`,
      targetSegment: `leadership`,
    },
    {
      label: en ? `` : `الأخبار`,
      path: en ? `/en/news` : `/news`,
      targetSegment: `news`,
    },
  ];
  return (
    <div className="myContainer flex items-center justify-between">
      <Link
        href={en ? "/en" : "/"}
        className="  z-[2] w-[120px] h-[52px] md:w-[11.5104166667vw] md:h-[4.375vw] relative"
      >
        <Image
          src={darkMode ? "/images/dark_logo.svg" : "/images/logo.svg"}
          fill
          alt="logo"
          className="object-contain md:object-cover"
          priority
        />
      </Link>
      {hideIt || (
        <div
          className={`flex ${
            darkMode ? " text-[#244A54] " : " text-white "
          } md:text-[1.04166666667vw] md:leading-[1.5625vw]`}
        >
          <ul
            className={`sideBar opacity-0 md:opacity-[1] pointer-events-none md:pointer-events-auto  absolute top-0 leftRightFixer1 w-full h-screen
        md:static gap-y-[24px] md:w-[unset] md:h-[unset]   justify-center items-start  flex flex-col md:flex-row gap-x-[2.5vw] px-[10%] ${
          darkMode ? " border-[#00000033] " : " border-[#ffffff33] "
        } ${
              hideSwitch
                ? "md:p-0"
                : en
                ? " md:pr-[3.33333333333vw] md:pl-[unset] md:mr-[3.33333333333vw] md:border-r  "
                : " md:pl-[3.33333333333vw] md:pr-[unset] md:ml-[3.33333333333vw]  md:border-l "
            }`}
          >
            {data.map((item) => {
              if (item.label) {
                return (
                  <li
                    key={item.label}
                    className={`border-b-[1px] border-[white]    md:border-[0] pb-[14px] md:pb-[unset] w-full md:w-[unset] transition-all duration-[500ms] hover:text-[#4FE0A3] ${
                      item.slug == pathName ? "text-[#4FE0A3]" : ""
                    }`}
                  >
                    <Link href={en ? "/en/" + item.slug : item.slug}>
                      {item.label}
                    </Link>
                  </li>
                );
              }
            })}
          </ul>

          {hideSwitch || <LangSwitcher darkMode={darkMode} en={en} />}
          <div
            className={`${
              en ? "ml-[16px]" : "mr-[16px]"
            } block md:hidden menu w-[6vw] h-[6vw] cursor-pointer z-[2] top-[4px]`}
            onClick={openSidebar}
          >
            <span className="top-0"></span>
            <span className="top-[30%]"></span>
            <span className="top-[60%]"></span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DesktopNavigation;
