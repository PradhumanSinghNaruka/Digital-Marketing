import React from "react";
import { IoBulbOutline } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import { FaDollarSign } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa6";
import { MdOutlineVideoSettings } from "react-icons/md";
import { LuHandshake } from "react-icons/lu";

function Product() {
  const items = [
    {
      id: 1,
      title: "Branding & Creative",
      image: <IoBulbOutline className="w-12 h-12 text-blue-500" />,
      text1: "Branding & Creative",
      text2: "Digital Agencies",
      text3: "Creative Agencies",
      text4: "Product Design Companies",
      text5: "Logo Design Companies",
      text6: "Graphic Design Companies",
    },
    {
      id: 2,
      title: "Website & Interface",
      image: <CgWebsite className="w-12 h-12 text-blue-500" />,
      text1: "Web Design Companies",
      text2: " eCommerce Development Companies",
      text3: "Web Development Companies",
      text4: "WordPress Web Design Companies",
      text5: "WordPress Development Companies",
      text6: "Magento Development Companies",
    },
    {
      id: 3,
      title: "Marketing",
      image: <FaDollarSign className="w-12 h-12 text-blue-500" />,
      text1: "Web Design Companies",
      text2: " eCommerce Development Companies",
      text3: "Web Development Companies",
      text4: "WordPress Web Design Companies",
      text5: "WordPress Development Companies",
      text6: "Magento Development Companies",
    },
    {
      id: 4,
      title: "Software & App",
      image: <FaLaptopCode className="w-12 h-12 text-blue-500" />,
      text1: "Web Design Companies",
      text2: " eCommerce Development Companies",
      text3: "Web Development Companies",
      text4: "WordPress Web Design Companies",
      text5: "WordPress Development Companies",
      text6: "Magento Development Companies",
    },
    {
      id: 5,
      title: "IT Services",
      image: <MdOutlineVideoSettings className="w-12 h-12 text-blue-500" />,
      text1: "Web Design Companies",
      text2: " eCommerce Development Companies",
      text3: "Web Development Companies",
      text4: "WordPress Web Design Companies",
      text5: "WordPress Development Companies",
      text6: "Magento Development Companies",
    },
    {
      id: 6,
      title: "Bussiness Services",
      image: <LuHandshake className="w-12 h-12 text-blue-500" />,
      text1: "Bussiness Conslting Firms",
      text2: "Market Research Companies",
      text3: "Call Center Companies",
      text4: "WordPress Web Design Companies",
      text5: "WordPress Development Companies",
      text6: "Magento Development Companies",
    },
  ];
  return (
    <div className="w-full relative overflow-hidden bg-white text-black py-16 md:py-24">
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-black">
            <span>View Verified Agencies by </span>
            <span className="text-blue-400">Service Categories</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl md:text-2xl font-bold text-blue-500">
                  {item.title}
                </h2>
                <span className="w-10 h-10">{item.image}</span>
              </div>

              <div className="space-y-2">
                {[
                  item.text1,
                  item.text2,
                  item.text3,
                  item.text4,
                  item.text5,
                  item.text6,
                ].map((text, idx) => (
                  <p
                    key={idx}
                    className="text-base md:text-lg text-black font-medium hover:text-blue-400 hover:scale-105 cursor-pointer transition-colors duration-500"
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
