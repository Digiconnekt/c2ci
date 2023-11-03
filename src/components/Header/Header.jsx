import { NavLink } from "react-router-dom";
import MobileNav from "./partials/MobileNav";
import DesktopNav from "./partials/DesktopNav";

const Header = () => {
  return (
    <>
      <header className="sm:flex sm:justify-between py-3 fixed left-0 right-0 bg-white z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between w-full">
            <div className="flex items-center">
              <NavLink to="/">
                <img
                  src="../../images/logo.png"
                  alt="C2CI"
                  className="max-w-[150px] w-full"
                />
              </NavLink>
            </div>

            <MobileNav />

            <DesktopNav />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
