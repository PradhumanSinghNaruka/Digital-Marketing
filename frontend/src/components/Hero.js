// import React from "react";
// import photo from "../image/hero2.png";

// function Hero() {
//   return (
//     <div
//       name="Home"
//       className="w-full min-h-[90vh] md:min-h-screen flex items-center justify-center bg-white"
//     >
//       <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 gap-10 sm:gap-8 md:gap-12 mt-12 sm:mt-12 md:mt-16 lg:mt-20">
//         <div className="w-full md:w-3/5 space-y-4 md:space-y-8 lg:space-y-11 text-center md:text-left">
//           <p className="font-semibold text-sm sm:text-base md:text-md lg:text-2xl text-blue-700">
//             DIGITAL EXCELENCE
//           </p>
//           <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-7xl font-bold space-y-2">
//             <span className="text-gray-800">Weaving Your Digital </span>
//             <span className="text-blue-700 underline"> Success</span>
//           </h1>
//           <p className="text-sm sm:text-base md:text-xl font-medium text-wrap">
//             We combine social media and digital marketing strategies to weave a digital presence.
//             <span className="block text-xl md:text-2xl font-bold mt-1 text-blue-700">
//               Searchnix
//             </span>
//           </p>
//           <div className="flex justify-center md:justify-start border-black border rounded-full p-2 w-[420px] gap-6">
//             <input placeholder="Enter Your Email" className="p-3 border border-transparent rounded-full"
//             />
//             <button className="relative inline-flex items-center bg-blue-700 hover:bg-blue-900 justify-center px-6 py-3 overflow-hidden font-bold border rounded-full group w-[170px]">
//               <span className="relative w-full text-base font-semibold text-center text-white transition-colors duration-200 ease-in-out group-hover:text-white">
//                 Get Started
//               </span>
//             </button>
//           </div>
//         </div>
//         <div className="w-full md:w-2/5 flex justify-center">
//           <img
//             src={photo}
//             alt="Hero Section Image"
//             className="w-full max-w-[300px] md:max-w-[450px] h-auto"
//             style={{
//               animation: "slideY 3s ease-in-out infinite",
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;

import React from "react";
import photo from "../image/hero2.png";
import { FaCheckCircle } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

function Hero() {
  return (
    <div
      name="Home"
      className="w-full min-h-screen flex items-center justify-center bg-white overflow-hidden"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-12 gap-10 md:gap-16 mt-4">
        <div className="w-full md:w-3/5 space-y-4 md:space-y-6 text-center md:text-left">
          <p className="font-semibold text-sm md:text-base uppercase text-blue-500 tracking-wider">
            DIGITAL EXCELLENCE
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            <span className="text-gray-600">Weaving Your Digital </span>
            <span className="text-blue-700 border-b-4 border-blue-700">
              Success
            </span>
          </h1>
          <p className="text-gray-600 text-base md:text-lg lg:text-xl max-w-xl mx-auto md:mx-0">
            We combine social media and digital marketing strategies to weave a digital presence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
            <input
              type="email"
              placeholder="Input Your Email"
              className="px-5 py-4 rounded-full border border-gray-300 w-full sm:w-[300px] focus:outline-none"
            />
            <button className="px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-full transition duration-300 w-full sm:w-auto">
              Get Started
            </button>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2 pt-4">
            <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
              <FaCheckCircle className="text-blue-700" />
              <span className="text-sm font-semibold text-gray-800">CERTIFIED AGENCY</span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/5 flex justify-center relative">
          <div className="relative">
            <img
              src={photo}
              alt="Hero Section"
              className="w-full h-full mt-4"
            />
            <button className="absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-lg hover:scale-105 transition">
              <FaPlay className="text-blue-700 text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
