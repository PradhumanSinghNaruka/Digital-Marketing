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
      image: <IoBulbOutline className="w-12 h-12 text-blue-700" />,
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
      image: <CgWebsite className="w-12 h-12 text-blue-700" />,
      text1: "Web Design Companies",
      text2: " eCommerce Development Companies",
      text3: "Web Development Companies",
      text4:"WordPress Web Design Companies",
      text5:"WordPress Development Companies",
      text6:"Magento Development Companies"
    },
    {
      id: 3,
      title: "Marketing",
      image: <FaDollarSign className="w-12 h-12 text-blue-700" />,
      text1: "Web Design Companies",
      text2: " eCommerce Development Companies",
      text3: "Web Development Companies",
      text4:"WordPress Web Design Companies",
      text5:"WordPress Development Companies",
      text6:"Magento Development Companies"
    },
    {
      id: 4,
      title: "Software & App",
      image: <FaLaptopCode className="w-12 h-12 text-blue-700" />,
      text1: "Web Design Companies",
      text2: " eCommerce Development Companies",
      text3: "Web Development Companies",
      text4:"WordPress Web Design Companies",
      text5:"WordPress Development Companies",
      text6:"Magento Development Companies"
    },
    {
      id: 5,
      title: "IT Services",
      image: <MdOutlineVideoSettings className="w-12 h-12 text-blue-700" />,
      text1: "Web Design Companies",
      text2: " eCommerce Development Companies",
      text3: "Web Development Companies",
      text4:"WordPress Web Design Companies",
      text5:"WordPress Development Companies",
      text6:"Magento Development Companies"
    },
    {
      id: 6,
      title: "Bussiness Services",
      image: <LuHandshake className="w-12 h-12 text-blue-700" />,
      text1: "Bussiness Conslting Firms",
      text2: "Market Research Companies",
      text3: "Call Center Companies",
      text4:"WordPress Web Design Companies",
      text5:"WordPress Development Companies",
      text6:"Magento Development Companies"
    },
  ];
  return (
    <div className="w-full bg-blue-100 text-black space-y-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="max-w-screen-xl justify-center items-center p-8">
          <h1 className="text-blue-900 text-center text-3xl md:text-5xl font-bold">
            View Verified Agencies by Service Categories
          </h1>
        </div>
        <div className="grid md:grid-cols-3 gap-4 bg-blue-100 text-black mt-12">
          {items.map((item) => {
            return (
              <div
                className="text-center border rounded-xl gap-4 p-6 bg-white mb-12 shadow-xl"
                key={item.id}
              >
                <div className="mx-auto flex gap-4">
                  <h1 className="text-2xl text-blue-700">{item.title}</h1>
                  <span className="justify-end items-end text-end">
                    {item.image}
                  </span>
                </div>
                <div className="grid space-y-2 text-start text-semibold text-xl">
                  <h1 className="text-black hover:text-blue-500 duration-300 hover:scale-105 cursor-pointer">{item.text1}</h1>
                  <h1 className="text-black hover:text-blue-500 duration-300 hover:scale-105 cursor-pointer">{item.text2}</h1>
                  <h1 className="text-black hover:text-blue-500 duration-300 hover:scale-105 cursor-pointer">{item.text3}</h1>
                  <h1 className="text-black hover:text-blue-500 duration-300 hover:scale-105 cursor-pointer">{item.text4}</h1>
                  <h1 className="text-black hover:text-blue-500 duration-300 hover:scale-105 cursor-pointer">{item.text5}</h1>
                  <h1 className="text-black hover:text-blue-500 duration-300 hover:scale-105 cursor-pointer">{item.text6}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Product;
