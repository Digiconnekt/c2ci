import { Outlet } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />

      <ScrollToTop />
    </>
  );
};

export default MainLayout;
