import React, { useState } from "react";
import { draft } from "../assets/Assets";
import { CgMenuLeft } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  const [navMenu, setNavMenu] = useState(false);

  return (
    <div className="px-12 py-6 flex items-center text-white justify-between text-lg sticky z-10 top-0 bg-black">
      <div className="logo-container w-44">
        <img className="hover:grayscale duration-300" src={draft[0]} alt="" />
      </div>

      <div className="hidden md:block navbar-items font-bold">
        <ul className="flex gap-6 items-center">
          <li
            onClick={() => {
              setMenu("Home");
              window.scrollTo(0, 0); // Scrolls to the top when "Home" is clicked
            }}
            className={`cursor-pointer ${
              menu === "Home" ? "border-b-[3px] border-[lightseagreen]" : ""
            }`}
          >
            Home
          </li>
          <a href="#about">
            <li
              className={`cursor-pointer ${
                menu === "About" ? "border-b-[3px] border-[lightseagreen]" : ""
              }`}
              onClick={() => setMenu("About")}
            >
              About
            </li>
          </a>
          <a href="#test">
            <li
              className={`cursor-pointer ${
                menu === "Testnomials"
                  ? "border-b-[3px] border-[lightseagreen]"
                  : ""
              }`}
              onClick={() => setMenu("Testnomials")}
            >
              Testimonials
            </li>
          </a>
          <a href="#contact">
            <li
              className={`cursor-pointer ${
                menu === "Contact"
                  ? "border-b-[3px] border-[lightseagreen]"
                  : ""
              }`}
              onClick={() => setMenu("Contact")}
            >
              Contact
            </li>
          </a>
        </ul>
      </div>

      <div className="ms-32 sm:ms-0 flex connections items-center gap-4">
        <a href="https://www.linkedin.com/in/meduruharish" target="blank">
          <img
            className="w-8 hover:translate-y-[-10px] cursor-pointer duration-300"
            src={draft[1]}
            alt="LinkedIn"
          />
        </a>
        <a href="https://github.com/Harish6345" target="blank">
          <img
            className="w-8 bg-white rounded-full cursor-pointer hover:translate-y-[-10px] duration-300"
            src={draft[2]}
            alt="GitHub"
          />
        </a>

        {/* Mobile menu */}
        <div className="block md:hidden navbar-items font-bold relative z-50">
          {navMenu ? (
            <RxCross2
              className="absolute right-0 z-[9999] text-lg text-white top-0 cursor-pointer"
              onClick={() => setNavMenu(false)}
            />
          ) : (
            <CgMenuLeft
              className="absolute right-[-15px] top-[-10px] cursor-pointer"
              onClick={() => setNavMenu(true)}
            />
          )}

          {navMenu && (
            <ul className="fixed top-0 left-0 h-[100vh] w-full bg-[black] z-50 flex flex-col gap-6 items-center pt-12 ">
              {/* Ensure the menu takes full height and background is visible */}
              <li 
                onClick={() => {
                  setMenu("Home");
                  setNavMenu(false); // Close menu after clicking
                  window.scrollTo(0, 0);
                }}
                className={`cursor-pointer mt-24 ${
                  menu === "Home" ? "border-b-[3px] border-[lightseagreen]" : ""
                }`}
              >
                Home
              </li>
              <a href="#about">
                <li
                  className={`cursor-pointer ${
                    menu === "About" ? "border-b-[3px] border-[lightseagreen]" : ""
                  }`}
                  onClick={() => {
                    setMenu("About");
                    setNavMenu(false); // Close menu after clicking
                  }}
                >
                  About
                </li>
              </a>
              <a href="#test">
                <li
                  className={`cursor-pointer ${
                    menu === "Testnomials"
                      ? "border-b-[3px] border-[lightseagreen]"
                      : ""
                  }`}
                  onClick={() => {
                    setMenu("Testnomials");
                    setNavMenu(false); // Close menu after clicking
                  }}
                >
                  Testimonials
                </li>
              </a>
              <a href="#contact">
                <li
                  className={`cursor-pointer ${
                    menu === "Contact" ? "border-b-[3px] border-[lightseagreen]" : ""
                  }`}
                  onClick={() => {
                    setMenu("Contact");
                    setNavMenu(false); // Close menu after clicking
                  }}
                >
                  Contact
                </li>
              </a>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
