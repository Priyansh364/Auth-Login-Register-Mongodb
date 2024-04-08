import React from "react";
import { Link } from "react-router-dom";

const Navpr = () => {
  return (
    <div className="h-[15vh]">
      <header className="text-gray-50 top-0  left-0 w-full fixed bg-[#1a1a1a] body-font">
        <div className="container mx-auto flex justify-between  p-5  flex-row ">
          <Link to="/" className="flex title-font font-medium items-center text-gray-900 ">
              <img 
              width="10%"
              src="https://cdn.vectorstock.com/i/500p/95/97/eagle-logo-emblem-on-a-dark-background-vector-19859597.jpg" alt="" />
            <span className="ml-3 text-xl"></span>
          </Link>
          <nav className="md:ml-auto flex items-center text-base justify-center">
            <Link to="/Register" className="mr-5 hover:text-gray-300">Signup</Link>
            <Link to="/Login" className="mr-5 hover:text-gray-300">Login</Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navpr;
