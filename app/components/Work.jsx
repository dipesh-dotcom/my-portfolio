import React from "react";
import Image from "next/image";
import { assets, workList } from "@/assets/assets";
import Link from "next/link";

const Work = () => {
  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20" id="work">
      <h2 className="text-center text-5xl font-ovo">My latest work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in back-end development.
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center max-w-5xl mx-auto">
        {workList.map(({ img, title, description, github_link }, index) => (
          <li
            key={index}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transform transition-all duration-300 max-w-sm mx-auto"
          >
            {/* Project Thumbnail */}
            {img ? (
              <Image
                src={img}
                alt={title}
                width={400}
                height={220}
                className="w-full h-40 object-cover"
              />
            ) : (
              <div className="w-full h-40 bg-gray-200 flex items-center justify-center text-gray-500">
                No Image
              </div>
            )}

            {/* Card Content */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {title}
              </h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {description}
              </p>

              <Link
                href={github_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-medium text-white bg-black px-3 py-1.5 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
              >
                View on Github{" "}
                <Image
                  src={assets.right_arrow_white}
                  alt="Arrow Icon"
                  className="w-3 inline-block ml-1"
                />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Work;
