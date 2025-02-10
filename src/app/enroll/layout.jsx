"use client";
import Header from "@/components/Header";
import { useState } from "react";

export default function RootLayout({ children }) {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  return (
    <div className="overflow-hidden height-screen bg-no-repeat dark:bg-gradient-to-b dark:from-gray-900 dark:to-black duration-300">
      <Header open={open} activeItem={activeItem} setOpen={setOpen}></Header>
      {children}
    </div>
  );
}
