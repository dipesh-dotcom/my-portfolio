import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl mx-auto text-center h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image
          src={assets.profile_image}
          alt=""
          className="rounded-full w-32"
        />
      </div>

      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo">
        Hi! I’m Dipesh Shrestha
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-ovo">
        Backend Web Developer
      </h1>
      <p className="max-w-md mx-auto font-ovo">
        I’m backed web developer from Dolakha. Currently studying in Everest
        College, Thapathali.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <Link
          href="#contact"
          className="px-10 py-3 border rounded-full border-gray-500 bg-black text-white flex items-center gap-2"
        >
          connect with me{" "}
          <Image src={assets.arrow_icon} alt="" className="w-4" />
        </Link>
        <Link
          href="/Dipesh_CV.pdf"
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          my resume <Image src={assets.download_icon} alt="" className="w-4" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
