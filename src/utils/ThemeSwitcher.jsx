"use client";
import React, { useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const {theme, setTheme} = useTheme();
  
  useEffect(() => {
    setMounted(true);
    setTheme('light'); // Set initial theme to light
  }, []);
  
  if (!mounted) {
    return null;
  }
  return (
    <div className="flex items-center justify-center mx-4">
      {theme === "light" ? (
        <BiMoon
          className="cursor-pointer"
          fill="black"
          size={25}
          onClick={() => setTheme("dark")}
        />
      ) : (
        <BiSun
          className="cursor-pointer"
          size={25}
          onClick={() => setTheme("light")}
        />
      )}
    </div>
  );
};

export default ThemeSwitcher;
