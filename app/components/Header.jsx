import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl mx-auto text-center min-h-screen flex flex-col items-center justify-center py-6 sm:py-12 gap-3 sm:gap-5">
      {/* Profile Image */}
      <div>
        <Image
          src={assets.profile_image}
          alt="Profile"
          className="rounded-full w-32 sm:w-36 md:w-40"
        />
      </div>

      {/* Intro */}
      <h3 className="flex items-end gap-2 text-lg sm:text-xl md:text-2xl font-ovo">
        Hi! I’m Dipesh Shrestha
        <Image src={assets.hand_icon} alt="Hand Icon" className="w-5 sm:w-6" />
      </h3>

      {/* Role */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-ovo mt-1 sm:mt-2">
        Backend Web Developer
      </h1>

      {/* Description */}
      <p className="max-w-md mx-auto text-sm sm:text-base md:text-lg font-ovo mt-1 sm:mt-2">
        I’m a backend web developer from Dolakha. Currently studying at Everest
        College, Thapathali.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-4 sm:mt-6">
        <Link
          href="#contact"
          className="px-8 sm:px-10 py-2 sm:py-3 border rounded-full border-gray-500 bg-black text-white flex items-center gap-2 hover:bg-gray-800 transition"
        >
          connect with me
          <Image src={assets.arrow_icon} alt="Arrow Icon" className="w-4" />
        </Link>
        <Link
          href="/Dipesh_CV.pdf"
          className="px-8 sm:px-10 py-2 sm:py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:bg-gray-100 transition"
        >
          my resume
          <Image
            src={assets.download_icon}
            alt="Download Icon"
            className="w-4"
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
