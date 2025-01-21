"use client";
import DesktopNavigation from "./DesktopNavigation";

const ClientHeader = ({ en, darkMode, hideSwitch }) => {
  return (
    <header
      className={` absolute w-full md:top-[1.66666666667vw] pt-[30px] md:pt-[unset] md:pb-[1.66666666667vw] left-0 z-[20] ${
        darkMode ? " border-b border-[#0000001a]" : ""
      }`}
    >
      <DesktopNavigation
        data={formattedNavData}
        hideSwitch={hideSwitch}
        en={en}
        darkMode={darkMode}
        hideIt
      />
    </header>
  );
};

export default ClientHeader;
