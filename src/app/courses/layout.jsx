"use client";
import Header from "@/components/Header";
import { useState } from "react";

export default function RootLayout({ children }) {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  return (
    <div className="h-[500px]">
      <Header open={open} activeItem={activeItem} setOpen={setOpen}></Header>
      {children}
    </div>
  );
}