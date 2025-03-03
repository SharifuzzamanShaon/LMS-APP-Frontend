import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { Button } from "@mui/material";

const navItemsData = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Courses",
    url: "/courses",
  },

];

const NavItems = ({ activeItem, isMobile }) => {
  const { user } = useSelector((state) => state.auth);

  const handleChatClick = (e) => {
    if (!user) {
      e.preventDefault();
      toast.error("Please login to access this feature");
    }
  };

  return (
    <>
      {/* Navigation for larger screens */}
      <div className="hidden lg:block space-x-8 pl-10 p-4 ">
        <Link href="/" passHref>
          <span className="dark:text-gray-300 text-gray-600 hover:dark:text-[#37a39a] hover:text-[#554fa7] transition-all duration-300 text-[18px] font-Poppins cursor-pointer px-2">
            Home
          </span>
        </Link>
        <Link href="/courses" passHref>
          <span className="dark:text-gray-300 text-gray-600 hover:dark:text-[#37a39a] hover:text-[#554fa7] transition-all duration-300 text-[18px] font-Poppins cursor-pointer px-2">
            Courses
          </span>
        </Link>
     
          <Link href="/student-lounge" onClick={handleChatClick}>
            <Button
              sx={{
                backgroundColor: '#03bd62',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#2c827a',
                },
              }}
            >
              CHAT ROOM
            </Button>
          </Link>
      </div>

      {/* Navigation for smaller screens */}
      {isMobile && (
        <div className="lg:hidden mt-5 pl-4">
          <Link href="/" passHref>
            <span className={`${
              activeItem === 0
                ? "dark:text-[#37a39a] text-[crimson]"
                : "dark:text-white text-black"
            } block py-2 text-[18px] px-6 font-Poppins font-[400]`}>
              Home
            </span>
          </Link>
          <Link href="/courses" passHref>
            <span className={`${
              activeItem === 1
                ? "dark:text-[#37a39a] text-[crimson]"
                : "dark:text-white text-black"
            } block py-2 text-[18px] px-6 font-Poppins font-[400]`}>
              Courses
            </span>
          </Link>
        </div>
      )}
    </>
  );
};

export default NavItems;
