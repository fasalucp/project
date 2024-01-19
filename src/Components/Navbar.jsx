import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "/src/assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="space-y-16">
        <div>
          <nav className="flex items-center justify-between px-4 bg-primary fixed top-0 left-0 right-0 z-20 md:px-6 ">
            <div className="flex items-center gap-2 ">
              <img
                className="w-10 h-10"
                src={logo}
                alt=""
              />
              <h1>Rowgrid</h1>
            </div>

            <div className="flex items-center gap-5">
              <p  className="cursor-pointer text-sm tracking-wide font-semibold border-[0] border-b border-solid ">
                LET'S TALK
              </p>

              <h1
                onClick={openMenu}
                className="cursor-pointer text-sm tracking-wide font-semibold border-[0] border-b border-solid"
              >
                {isOpen ? "CLOSE" : "MENU "}
              </h1>
            </div>
          </nav>
        </div>

        {isOpen && (
          <div className="h-screen bg-primary text-lg flex flex-col justify-center items-center gap-10 fixed top-0 left-0 right-0 z-10">
            <Link to='/' onClick={closeMenu} className="no-underline text-text">
              Home
            </Link>
            <Link to='/about' onClick={closeMenu} className="no-underline text-text">
              About
            </Link>
            <Link to='/service' onClick={closeMenu} className="no-underline text-text">
              Services
            </Link>
            <Link to='/project' onClick={closeMenu} className="no-underline text-text">
              Projects
            </Link>
            <Link to='/contact' onClick={closeMenu} className="no-underline text-text">
              Contact
            </Link>
          </div>
        )}
        <Outlet />
      </div>
    </>
  );
};
export default Navbar;
