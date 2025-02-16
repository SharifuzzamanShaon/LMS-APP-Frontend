"use client";
import React, { useState } from "react";
import Head from 'next/head';
import Heading from "../utils/Heading";
import HeroSection from "../components/HeroSection";
import { useSelector } from "react-redux";
import Header from "@/components/Header";
import CourseComponent from "@/components/Course/CourseComponent";
import ForVisitor from "@/utils/ForVisitor";
import Footer from "@/components/Footer";
import Userreviws from "@/components/Userreviws";
const page = () => {
  const { user } = useSelector((state) => state.auth);
  const siteTitle = user
    ? `${user.username.split("").slice(0, 5).join("")}`
    : "LMS-App";

  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);



  return (
    <div className="h-[800px]">
      <Head>
        <link rel="icon" href="/image/site-logo.png" />
      </Head>
      <Heading
        title={`${siteTitle} Profile`}
        description="This is a learning paltform"
        keywords="Programming, MERN, C#, Laravel, React JS"
      ></Heading>
      <Header open={open} activeItem={activeItem} setOpen={setOpen}></Header>
      <HeroSection />
      <CourseComponent/>
      {!user && <ForVisitor/>}
      <Userreviws/>
      <Footer/>
    </div>
  );
};

export default page;
