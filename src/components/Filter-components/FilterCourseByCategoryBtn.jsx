import * as React from 'react';
import { Button, IconButton } from '@mui/material';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from 'react';

export default function FilterCourseByCategoryBtn({courses, setFilteredCourses}) {  
  const containerRef = React.useRef(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 200;
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleBackClick = () => {
    setSelectedCategory(null);
  };

  const handleFilter = (tag) => {
    const filteredCourses = courses.filter((course) => course.tags.includes(tag));
    setFilteredCourses(filteredCourses);
  };

  const courseCategories = {
    Development: [
      "Web Development",
      "Mobile Development",
      "Game Development",
      "Blockchain",
      "DevOps",
    ],
    Programming: [
      "Programming",
      "Node js",
      "React js",
      "C++",
      "Python",
      "Java",
      "C#",
      "Ruby",
      "PHP",
      "SQL",
      "Git",
      "Docker",
    ],
    "Data & AI": [
      "Data Science",
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "Data Analysis",
      "Cloud Computing",
    ],
    "Design & Creative": [
      "UI/UX Design",
    ],
    Security: [
      "Cybersecurity",
    ]
  };

  return (
    <div style={{ position: 'relative', padding: '0 40px' }}>
      <IconButton 
        onClick={() => scroll('left')}
        style={{
          position: 'absolute',
          left: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1,
          backgroundColor: 'var(--background-color, white)',
          boxShadow: '0 2px 4px rgba(0,0,0,0.08)'
        }}
      >
        <IoIosArrowBack />
      </IconButton>

      <div
        ref={containerRef}
        style={{
          display: 'flex',
          overflowX: 'hidden',
          gap: '24px',
          padding: '16px 0',
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }}
      >
        {!selectedCategory ? (
          // Show main categories
          Object.entries(courseCategories).map(([category, tags]) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className="flex items-start min-w-[150px] px-4 py-2 text-left text-base font-bold 
                bg-white dark:bg-gray-800 text-[#1c1d1f] dark:text-white
                hover:bg-[#f7f9fa] dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {category}
              <span className="ml-1 text-sm text-[#6a6f73] dark:text-gray-400">
                ({tags.length})
              </span>
            </button>
          ))
        ) : (
          // Show subcategories
          <div className="flex flex-col w-full gap-2">
            <button
              onClick={handleBackClick}
              className="flex items-center gap-2 px-4 py-2 text-left text-base font-bold 
                text-[#1c1d1f] dark:text-white"
            >
              <IoIosArrowBack /> {selectedCategory}
            </button>
            
            <div className="flex flex-wrap gap-3 p-4">
              {courseCategories[selectedCategory].map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleFilter(tag)}
                  className="px-4 py-2 text-sm text-[#6a6f73] dark:text-gray-400 
                    border border-[#6a6f73] dark:border-gray-400 rounded-full
                    hover:bg-[#f7f9fa] dark:hover:bg-gray-700 
                    hover:text-[#1c1d1f] dark:hover:text-white
                    hover:border-[#1c1d1f] dark:hover:border-white
                    transition-all duration-200"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <IconButton 
        onClick={() => scroll('right')}
        style={{
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1,
          backgroundColor: 'var(--background-color, white)',
          boxShadow: '0 2px 4px rgba(0,0,0,0.08)'
        }}
      >
        <IoIosArrowForward />
      </IconButton>
    </div>
  );
}
