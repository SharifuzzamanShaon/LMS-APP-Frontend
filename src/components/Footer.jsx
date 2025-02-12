import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
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
