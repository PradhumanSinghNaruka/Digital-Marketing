import React from "react";
import photo5 from "../image/logo5.png";
import { FaSearchDollar } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa6";
import { VscGraph } from "react-icons/vsc";
import { FaShareAlt } from "react-icons/fa";

function Hero() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: { photo5 } }}
    >
      <div className="absolute inset-0 bg-black/40">
        <img src={photo5} className="h-full w-full"/>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-white text-center px-4 space-y-12 mt-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Save Time Finding The Right Agency Partner
        </h1>
        <p className="text-lg md:text-xl text-wrap max-w-2xl">
          Share your requirements & we’ll find the right service provider for
          your project
        </p>
        <button className="p-3 md:p-4 w-[150px] md:w-[200px] bg-blue-300 text-black text-xl font-semibold space-x-2 hover:bg-blue-400 hover:text-white duration-300 rounded-md cursor-pointer">
          Get Started
        </button>
        <div className="w-full space-y-2">
          <h1>BROWSE OUR SERVICE CATEGORIES</h1>
          <hr className="text-color border-t w-full" />
        </div>
        <marquee>
          <div className="flex space-x-4 w-full">
            <h1 className="rounded-full w-[200px] p-2 bg-transparent gap-3 border flex text-center h-[45px] cursor-pointer">
              <FaGears className="mt-1 w-4 h-4" />
              Software Developer
            </h1>
            <h1 className="rounded-full w-[200px] p-2 bg-transparent gap-3 border flex text-center h-[45px] cursor-pointer">
              <FaLaptopCode className="mt-1 w-4 h-4" />
              Website Developer
            </h1>
            <h1 className="rounded-full w-[160px] p-2 bg-transparent gap-3 border flex text-center h-[45px] cursor-pointer">
              <VscGraph className="mt-1 w-4 h-4" />
              Marketing
            </h1>
            <h1 className="rounded-full w-[250px] p-2 bg-transparent gap-3 border flex text-center h-[45px] cursor-pointer">
              <FaSearchDollar className="mt-1 w-4 h-4" />
              Search Engine Optimization
            </h1>
            <h1 className="rounded-full w-[200px] p-2 bg-transparent gap-3 border flex text-center h-[45px] cursor pointer">
              <FaShareAlt  className="mt-1 w-4 h-4" />
              Socia Marketing
            </h1>
          </div>
        </marquee>
        
      </div>
    </div>
  );
}

export default Hero;
