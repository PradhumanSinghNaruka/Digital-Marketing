import React from "react";
import photo1 from "../image/about3.jpg";
import { IoIosArrowForward } from "react-icons/io";
import Steps from "../components/Steps";
import Why from "../components/Why";
import Slide from "../components/Slide";
import Compare from "../components/Compare";

function About() {
  return (
    <div
      name="Home"
      className="w-full min-h-screen grid overflow-hidden mt-12 md:mt-16 bg-white"
    >
      <div className="w-full h-[90vh] md:h-[80vh] bg-gray-900 items-center text-center justify-between space-y-8">
        <div className="space-y-4 md:space-y-8 px-12 md:px-28 lg:px-36">
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl justify-between font-bold mt-20">
            About
          </h1>
          <p className="text-white text-md flex text-center justify-center items-center gap-2">
            Home
            <IoIosArrowForward className="text-blue-700 text-center" />
            <p> About</p>
          </p>
          <p className="text-white">
            Nulla risus eros, imperdiet in finibus non, mollis et turpis.
            Aliquam erat volutpat. Nunc at lacus a purus pretium volutpat nec
            quis mi. Ut vulputate rutrum malesuada.
          </p>
        </div>
        <div className="w-full h:[200px] md:h-[360px] justify-center items-center text-center px-36 hidden md:block">
          <img src={photo1} className="w-full h-full rounded-xl" />
        </div>
      </div>
      <div className="mt-28 md:mt-52 px-8 mb-12">
        <Steps/>
      </div>
      <div className="w-full mt-12">
        <Slide/>
      </div>
      <div className="w-full mt-12">
        <Why/>
      </div>
      
      
    </div>
  );
}

export default About;
