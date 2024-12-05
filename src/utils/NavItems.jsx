import Link from "next/link";
import React from "react";

const navItemsData = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Courses",
    url: "/courses",
  },
  {
    name: "Chat's",
    url: "/student-lounge",
  },
  {
    name: "Policy",
    url: "/policy",
  },
];

const NavItems = ({ activeItem, isMobile }) => {
  return (
    <>
      {/* Navigation for larger screens */}
        <div className="hidden lg:block space-x-8 pl-10 py-4">
          {navItemsData?.map((i, index) => (
            <Link href={i.url} key={index} passHref>
              <span
                className={`${
                  activeItem === index
                    ? "dark:text-[#37a39a] text-[#554fa7] font-semibold"
                    : "dark:text-gray-300 text-gray-600"
                } hover:dark:text-[#37a39a] hover:text-[#554fa7] transition-all duration-300 text-[18px] font-Poppins cursor-pointer px-2`}
              >
                {i.name}
              </span>
            </Link>
          ))}
        </div>
      {/* Navigation for smaller screens */}
      {isMobile && (
        <div className="lg:hidden mt-5 pl-4">
          {navItemsData.map((i, index) => (
            <Link href={i.url} key={index} passHref>
              <span
                className={`${
                  activeItem === index
                    ? "dark:text-[#37a39a] text-[crimson]"
                    : "dark:text-white text-black"
                } block py-5 text-[18px] px-6  font-Poppins font-[400]`}
              >
                {i.name}
              </span>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default NavItems;
