import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="bg-gray-800 text-white px-4 py-6 mt-8 text-center font-medium 
      md:text-base lg:text-lg shadow-inner"
    >
      
      <p className="mb-4">
        Developed by:{" "}
        <Link
          href="https://www.linkedin.com/in/syed-muhammad-fahad-64a01b2aa/"
          target="_blank"
          className="text-blue-400 hover:text-blue-500 underline"
          rel="noopener noreferrer"
        >
          SYED MUHAMMAD FAHAD
        </Link>
      </p>

      
      <p className="text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors duration-300">
        Homework Completed Slot: 
        <span className="font-semibold text-yellow-300"> Tuesday 7:00 PM - 10:00 PM</span>
      </p>

      
      <hr className="my-4 border-gray-700" />

    
      <p className="text-sm text-white">
        &copy; {new Date().getFullYear()} All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
