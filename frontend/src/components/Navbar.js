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
import { HiMenu, HiX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { id: 1, text: "HOME", path: "/" },
    { id: 2, text: "ABOUT US", path: "/about" },
    {
      id: 4,
      text: "SERVICE",
      subItems: [
        { id: "s1", text: "Service Details", path: "/service" },
        { id: "s2", text: "SEO", path: "/service/smm" },
        { id: "s3", text: "Socal Media Marketing", path: "/service/content" },
      ],
    },
    { id: 5, text: "BLOG", path: "/blog" },
    { id: 6, text: "CONTACT US", path: "/contactus" },
  ];

  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 sm:px-6 md:px-8 h-20">
        <img
          src={photo}
          alt="Searchnix"
          className="h-36 sm:h-36 md:h-32 lg:h-40 cursor-pointer"
          onClick={() => navigate("/")}
        />
        <ul className="hidden md:flex space-x-6 lg:space-x-12 font-semibold text-black">
          {navItems.map(({ id, text, path, subItems }) => (
            <li key={id} className="relative group">
              {subItems ? (
                <span className="hover:text-blue-800 cursor-pointer hover:scale-105 duration-200 text-lg">
                  {text}
                </span>
              ) : (
                <span
                  onClick={() => navigate(path)}
                  className="hover:text-blue-800 cursor-pointer hover:scale-105 duration-200 text-lg"
                >
                  {text}
                </span>
              )}
              {subItems && (
                <ul className="absolute top-full left-0 mt-2 bg-white border shadow-md rounded w-56 hidden group-hover:block">
                  {subItems.map((sub) => (
                    <li
                      key={sub.id}
                      className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                      onClick={() => navigate(sub.path)}
                    >
                      {sub.text}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div
          className="md:hidden cursor-pointer text-2xl text-black"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? <HiX /> : <HiMenu />}
        </div>
      </div>
      {navOpen && (
        <ul className="md:hidden bg-white px-6 py-4 space-y-4 shadow-lg">
          {navItems.map(({ id, text, path, subItems }) => (
            <li key={id} className="text-black font-semibold border-b border-gray-200 pb-2">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => {
                  if (subItems) {
                    setMobileServiceOpen(!mobileServiceOpen);
                  } else {
                    navigate(path);
                    setNavOpen(false);
                  }
                }}
              >
                <span>{text}</span>
                {subItems && (
                  <span className="text-xl">
                    {mobileServiceOpen ? "-" : "+"}
                  </span>
                )}
              </div>

              {subItems && (
                <div
                  className={`transform transition-all origin-top ${
                    mobileServiceOpen
                      ? "scale-y-100 opacity-100 max-h-96"
                      : "scale-y-0 opacity-0 max-h-0"
                  } overflow-hidden`}
                >
                  <ul className="pl-4 mt-2 space-y-2">
                    {subItems.map((sub) => (
                      <li
                        key={sub.id}
                        className="text-gray-700 hover:text-blue-500 cursor-pointer"
                        onClick={() => {
                          navigate(sub.path);
                          setNavOpen(false);
                          setMobileServiceOpen(false);
                        }}
                      >
                        {sub.text}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
