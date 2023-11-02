import { Outlet } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
