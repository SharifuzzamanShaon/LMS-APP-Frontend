import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="relative">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 transform -translate-y-full">
        <svg className="w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
          {/* First Layer - Main Wave */}
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            className="fill-blue-600 dark:fill-blue-800 opacity-20"
          />
          {/* Second Layer - Tech Pattern */}
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            className="fill-blue-600 dark:fill-blue-800 opacity-15"
          />
          {/* Third Layer - Bottom Accent */}
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-blue-600 dark:fill-blue-800 opacity-10"
          />
        </svg>
      </div>

      <footer className="bg-black dark:bg-slate-900 text-gray-700 dark:text-white p-6">
        <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between items-center">
          {/* Left Side - Logo & Name */}
          <div className="flex items-center space-x-3 w-full sm:w-auto justify-center sm:justify-start mb-4 sm:mb-0">
            
            <p className="text-xl font-semibold text-white">SkillSage</p>
          </div>

          {/* Middle - Links */}
          <div className="flex flex-wrap justify-center sm:justify-center w-full sm:w-auto space-x-6 mb-4 sm:mb-0">
            <a href="/about" className="hover:text-blue-500 text-white mb-2 sm:mb-0">About</a>
            <a href="/privacy-policy" className="hover:text-blue-500 text-white mb-2 sm:mb-0">Privacy Policy</a>
            <a href="/terms" className="hover:text-blue-500 text-white mb-2 sm:mb-0">Terms & Conditions</a>
            <a href="/contact" className="hover:text-blue-500 text-white mb-2 sm:mb-0">Contact Us</a>
          </div>

          {/* Right Side - Social Media Icons */}
          <div className="flex space-x-4 justify-center sm:justify-start w-full sm:w-auto mt-4 sm:mt-0">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-gray-600 dark:text-white hover:text-blue-600" size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-gray-600 dark:text-white hover:text-blue-400" size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-gray-600 dark:text-white hover:text-blue-700" size={24} />
            </a>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <div className="text-center mt-6 text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} SkillSage. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default Footer
