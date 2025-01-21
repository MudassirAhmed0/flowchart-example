import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ en, children, hideSwitch }) => {
  return (
    <>
      <Header en={en} hideSwitch={hideSwitch} />
      {children}
      <Footer en={en} />
    </>
  );
};

export default Layout;
