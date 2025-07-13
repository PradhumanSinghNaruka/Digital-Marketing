import React from "react";
import photo from "../image/searchenix.png";

function Hero() {
  return (
    // <div
    //   className="relative w-full h-screen bg-cover bg-center "
    //   style={{ backgroundImage: { photo5 } }}
    // >
    //   <div className="absolute inset-0 bg-black/40">
    //     <img src={photo5} className="h-full w-full brightness-100" />
    //   </div>
    //   <div className="relative z-10 flex flex-col items-center justify-center h-screen text-white bg-gradient-to-r from-[#002244] to-transparent text-center px-4 space-y-12 mt-12">
    //     <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
    //       Save Time Finding The Right Agency Partner
    //     </h1>
    //     <p className="text-lg md:text-xl text-wrap max-w-2xl">
    //       Share your requirements & we’ll find the right service provider for
    //       your project
    //     </p>
    //     <button class="relative inline-flex items-center bg-indigo-50 justify-start px-5 py-3 overflow-hidden font-bold rounded-lg group">
    //       <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-blue-800 opacity-[3%]"></span>
    //       <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-blue-800 opacity-100 group-hover:-translate-x-8"></span>
    //       <span class="relative w-full text-base font-semibold text-left text-gray-900 transition-colors duration-200 ease-in-out group-hover:text-white">
    //         Get Started
    //       </span>
    //       <span class="absolute inset-0 border-2 rounded-md"></span>
    //     </button>
    //     <div className="w-full space-y-2">
    //       <h1>BROWSE OUR SERVICE CATEGORIES</h1>
    //       <hr className="text-color border-t w-full" />
    //     </div>

    //     <div className="flex space-x-4 w-full justify-center items-center">
    //       <h1 className="rounded-full w-[200px] p-2 bg-transparent gap-3 border flex text-center h-[45px] cursor-pointer">
    //         <FaGears className="mt-1 w-4 h-4" />
    //         Software Developer
    //       </h1>
    //       <h1 className="rounded-full w-[200px] p-2 bg-transparent gap-3 border flex text-center h-[45px] cursor-pointer">
    //         <FaLaptopCode className="mt-1 w-4 h-4" />
    //         Website Developer
    //       </h1>
    //       <h1 className="rounded-full w-[160px] p-2 bg-transparent gap-3 border flex text-center h-[45px] cursor-pointer">
    //         <VscGraph className="mt-1 w-4 h-4" />
    //         Marketing
    //       </h1>
    //       <h1 className="rounded-full w-[250px] p-2 bg-transparent gap-3 border flex text-center h-[45px] cursor-pointer">
    //         <FaSearchDollar className="mt-1 w-4 h-4" />
    //         Search Engine Optimization
    //       </h1>
    //       <h1 className="rounded-full w-[200px] p-2 bg-transparent gap-3 border flex text-center h-[45px] cursor pointer">
    //         <FaShareAlt className="mt-1 w-4 h-4" />
    //         Socia Marketing
    //       </h1>
    //     </div>
    //   </div>
    // </div>
    <div
      name="Home"
      className="w-full min-h-[90vh] md:min-h-screen flex items-center justify-center bg-gradient-to-r from-[rgb(111,178,245)] to-transparent"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 gap-10 sm:gap-8 md:gap-12 mt-12 sm:mt-12 md:mt-16 lg:mt-20">
        <div className="w-full md:w-3/5 space-y-4 md:space-y-8 lg:space-y-11 text-center md:text-left">
          <p className="font-semibold text-sm sm:text-base md:text-md lg:text-xl">
            PREMIUM SEARCH ENGINE OPTIMIZATION AGENCY
          </p>
          <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-7xl font-bold">
            WE GROW BRANDS ONLINE
          </h1>
          <p className="text-sm sm:text-base md:text-xl font-medium">
            Custom Websites, Branding, Digital Marketing & SEO With
            <span className="block text-xl md:text-2xl font-bold mt-1">
              Searchnix
            </span>
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="relative inline-flex items-center bg-indigo-50 justify-center px-6 py-3 overflow-hidden font-bold rounded-lg group w-[170px]">
              <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-blue-800 opacity-[3%]"></span>
              <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-blue-400 opacity-100 group-hover:-translate-x-8"></span>
              <span className="relative w-full text-base font-semibold text-center text-gray-900 transition-colors duration-200 ease-in-out group-hover:text-white">
                Get Started
              </span>
              <span className="absolute inset-0 border-2 rounded-md"></span>
            </button>
          </div>
        </div>
        <div className="w-full md:w-2/5 flex justify-center">
          <img
            src={photo}
            alt="Hero Section Image"
            className="w-full max-w-[300px] md:max-w-[450px] h-auto"
            style={{
              animation: "slideY 3s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
