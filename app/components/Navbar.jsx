import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      scrollY > 50 ? setIsScroll(true) : setIsScroll(false);
    });
  }, []);

  return (
    <>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll ? "bg-white bg-opacity-50  backdrop-blur-lg shadow-sm" : ""
        }`}
      >
        <Link href="#top">
          <Image
            src={assets.logo}
            alt=""
            className="w-28 cursor-pointer mr-14"
          />
        </Link>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll ? "" : "bg-white shadow-sm bg-opacity-50"
          } `}
        >
          <li>
            <Link className="font-ovo" href="#top">
              Home
            </Link>
          </li>
          <li>
            <Link className="font-ovo" href="#about">
              About me
            </Link>
          </li>
          <li>
            <Link className="font-ovo" href="#services">
              Services
            </Link>
          </li>
          <li>
            <Link className="font-ovo" href="#work">
              My Work
            </Link>
          </li>
          <li>
            <Link className="font-ovo" href="#contact">
              Contact me
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-4 ">
          <Link
            href="#contact"
            className="font-ovo hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 ont-ovo"
          >
            Contact{" "}
            <Image src={assets.arrow_icon} alt="contact" className="w-3" />
          </Link>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} alt="" className="w-6" />
          </button>
        </div>

        {/* -- ---- Mobile Menu ---- -- */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 button-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
        >
          <div className="absolute top-6 right-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt="icon"
              className="w-5 cursor-pointer"
            />
          </div>
          <li>
            <Link onClick={closeMenu} className="font-ovo" href="#top">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} className="font-ovo" href="#about">
              About me
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} className="font-ovo" href="#services">
              Services
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} className="font-ovo" href="#work">
              My Work
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} className="font-ovo" href="#contact">
              Contact me
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
