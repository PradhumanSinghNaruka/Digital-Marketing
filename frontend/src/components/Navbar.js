// import React from "react";
// import photo from "../image/logo4.png";
// import { MdEmail } from "react-icons/md";
// import { FaPhoneAlt } from "react-icons/fa";

// function Navbar({ cartItemCount }) {
//   const navItems = [
//     { id: 1, text: "ABOUT", path: "" },
//     { id: 2, text: "SERVICE", path: "" },
//     { id: 3, text: "WORK", path: "" },
//     { id: 4, text: "CAREERS", path: "" },
//     { id: 5, text: "CONTACT", path: "" },
//     { id: 6, text: "BLOG", path: "" },
//   ];

//   return (
//     <>
//       <div className="w-full px-4 sm:px-8 md:px-12 lg:px-12 h-20 shadow-md shadow-blue-100 fixed top-0 left-0 right-0 z-50 bg-white text-black">
//         <div className="max-w-screen-xl mx-auto flex justify-between items-center h-20 text-black">
//           <div className="flex">
//             <img
//               src={photo}
//               className="h-48 w-48 sm:h-6 sm:w-16 md:h-32 md:w-32 lg:h-48 lg:w-48 cursor-pointer"
//               alt="searchenix"
//             />
//           </div>
//           <div className="flex">
//             <ul className="hidden md:flex md:space-x-6 lg:space-x-12 font-thin md:text-sm lg:text-lg text-black hover:text-blue-400">
//               {navItems.map(({ id, text, path, scroll }) => (
//                 <li
//                   key={id}
//                   className="hover:scale-105 text-black font-semibold duration-300 cursor-pointer"
//                 >
//                   <span className="text-black hover:text-blue-500 hover:scale-105">
//                     {text}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="text-black cursor-pointer mt-2 ml-2 flex space-x-16 sm:space-x-2 md:space-x-6 lg:space-x-16">
//             <div className="">
//               <FaPhoneAlt
//                 className="hover:scale-125 hover:text-blue-500 duration-300"
//                 onClick={() =>
//                   document.getElementById("my_modal_1").showModal()
//                 }
//               />
//             </div>
//             <div className="relative">
//               <MdEmail className="hover:scale-125 duration-300 text-black hover:text-blue-500 text-xl" />
//               {cartItemCount > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
//                   {cartItemCount}
//                 </span>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Navbar;
import React, { useState } from "react";
import photo from "../image/logo4.png";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar({ cartItemCount }) {
  const [navOpen, setNavOpen] = useState(false);

  const navItems = [
    { id: 1, text: "ABOUT", path: "" },
    { id: 2, text: "SERVICE", path: "" },
    { id: 3, text: "WORK", path: "" },
    { id: 4, text: "CAREERS", path: "" },
    { id: 5, text: "CONTACT", path: "" },
    { id: 6, text: "BLOG", path: "" },
  ];

  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 sm:px-6 md:px-8 h-20">
        <img
          src={photo}
          alt="Searchnix"
          className="h-36 sm:h-36 md:h-32 lg:h-36 cursor-pointer"
        />
        <ul className="hidden md:flex space-x-6 lg:space-x-12 font-semibold text-black">
          {navItems.map(({ id, text }) => (
            <li
              key={id}
              className="hover:text-blue-500 cursor-pointer hover:scale-105 duration-200"
            >
              {text}
            </li>
          ))}
        </ul>
        <div className="flex items-center space-x-6">
          <FaPhoneAlt className="text-black hover:text-blue-500 cursor-pointer hover:scale-110 duration-200" />
          <div className="relative">
            <MdEmail className="text-black hover:text-blue-500 cursor-pointer hover:scale-110 duration-200 text-xl" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                {cartItemCount}
              </span>
            )}
          </div>
          <div
            className="md:hidden cursor-pointer text-2xl text-black"
            onClick={() => setNavOpen(!navOpen)}
          >
            {navOpen ? <HiX /> : <HiMenu />}
          </div>
        </div>
      </div>
      {navOpen && (
        <ul className="md:hidden bg-white px-6 py-4 space-y-4 shadow-lg">
          {navItems.map(({ id, text }) => (
            <li
              key={id}
              className="text-black font-semibold hover:text-blue-500 cursor-pointer border-b border-gray-200 pb-2"
              onClick={() => setNavOpen(false)}
            >
              {text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
