import Image from "next/image";
import SeachCourse from "./User-componets/SeachCourse";
const HeroSection = () => {
  return (
    <div className="min-500 flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2 p-6">
          <Image
            src="/image/hero-img.png" // Replace with your image path
            alt="Course Image"
            width={500}
            height={500}
            className=""
          />
        </div>

        {/* Right Side: Text */}
        <div className="w-full lg:w-1/2 p-6 text-center lg:text-left">
          <h1 className="text-2sm md:text-3xl font-Josefin text-black dark:text-white font-mono">
            Find Your Best Course
          </h1>
          <p className="mt-4 text-sm font-Poppins text-gray-700 dark:text-gray-300">
            Explore our extensive range of courses and discover the one that
            suits you best.
          </p>
          <SeachCourse />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
