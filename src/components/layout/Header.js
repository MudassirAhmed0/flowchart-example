import getNavData from "@/lib/data-hooks/getNavData";
import DesktopNavigation from "./DesktopNavigation";
import getFormattedNavigationData from "@/lib/data-hooks/getFormattedNavData";

const Header = async ({ en, darkMode, hideSwitch }) => {
  const navData = await getNavData(!en);
  const formattedNavData = await getFormattedNavigationData(
    navData.nav.tree,
    !en
  );
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
      />
    </header>
  );
};

export default Header;
