import { techStack } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const TechStack = () => {
  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20" id="techstack">
      <h2 className="text-center text-5xl font-ovo">Tech Stack</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        I am a focused developer from Dolakha, with a knowledge multiple
        technologies like Python , React, Postgresql and MySQL.
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {techStack.map(({ icon, title, tech }, index) => (
          <li
            key={index}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transform transition-all duration-300"
          >
            {/* Card Icon */}
            <div className="flex items-center gap-3 mb-4">
              <Image src={icon} alt={title} className="w-8 h-8" />
              <h3 className="font-medium text-lg text-gray-800">{title}</h3>
            </div>

            {/* Tech Pills */}
            <ul className="flex flex-wrap gap-2">
              {tech.map(({ title, icon }, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 bg-gray-50 border border-gray-200 px-3 py-1 rounded-lg text-sm text-gray-700 cursor-pointer hover:bg-gray-100 transition"
                >
                  <Image src={icon} alt={title} className="w-4 h-4" />
                  {title}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechStack;
