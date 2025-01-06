"use Client";
import React, { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import { BiSearch } from "react-icons/bi";
import SearchResultModal from "./SearchResultModal";
import { useSeachCourseMutation } from "../../../redux/features/course/courseApi";

const SeachCourse = () => {
  const [keyword, setKeyword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchResult, setSearchResult] = useState("");
  const [searchCourse] = useSeachCourseMutation();

  const handleKeywordChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value);
  };
  useEffect(() => {
    if (keyword.trim() === "") {
      setIsModalOpen(false);
      return; // Don't trigger handleSearchCourse when keyword is empty
    }
    let timeOut = setTimeout(() => {
      handleSearchCourse();
      setIsModalOpen(true);
    }, 2000);
    return () => clearTimeout(timeOut);
  }, [keyword]);
  const handleSearchCourse = async () => {
    const result = await searchCourse(keyword);
    setSearchResult(result?.data);
    console.log(result);
  };
  return (
    <>
      <div className=" rounded-[20px] p-[5px_10px] m-[10px] flex items-center shadow-[rgba(50, 50, 93, 0.25)_0px_6px_12px_-2px,rgba(0, 0, 0, 0.3)_0px_3px_7px_-3px]">
        <IconButton>
          <BiSearch className="cursor-pointer dark:text-white text-black" />
        </IconButton>
        <input
          placeholder="search"
          onChange={handleKeywordChange}
          className="outline-0 border-none ml-2 text-lg text-gray-600 w-full bg-gray-100  dark:bg-slate-900 dark:text-white rounded-md shadow-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:border-white"
        ></input>
      </div>
      <SearchResultModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        searchResult={searchResult}
      />
    </>
  );
};

export default SeachCourse;
