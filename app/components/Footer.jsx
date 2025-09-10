import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image src={assets.logo} alt="Logo" className="w-36 mx-auto mb-2" />

        <div className="w-max flex flex-col sm:flex-row items-center gap-2 mx-auto">
          <div className="flex items-center gap-2">
            <Image src={assets.gmail} alt="Gmail" className="w-6 h-auto" />
            <span>dipesh@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={assets.whatsapp}
              alt="WhatsApp"
              className="w-6 h-auto"
            />
            <span>9864111517</span>
          </div>
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 William Mark. All rights reserved.</p>
        <ul className="flex items-center gap-6 sm:gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <Link target="_blank" href="https://www.github.com">
              <Image src={assets.github} alt="GitHub" className="w-6 h-auto" />
            </Link>
          </li>
          <li>
            <Link target="_blank" href="https://www.linkedin.com">
              <Image
                src={assets.linkedin}
                alt="LinkedIn"
                className="w-6 h-auto"
              />
            </Link>
          </li>
          <li>
            <Link target="_blank" href="https://www.facebook.com">
              <Image
                src={assets.facebook}
                alt="Facebook"
                className="w-6 h-auto"
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
