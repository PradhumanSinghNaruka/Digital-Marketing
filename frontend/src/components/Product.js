import React from "react";
import photo1 from "../image/service1.jpg";
import photo2 from "../image/service2.jpg";
import photo3 from "../image/service4.jpg";
import photo4 from "../image/service5.jpg";
import photo5 from "../image/service6.jpg";
import photo6 from "../image/service7.jpg";
import photo7 from "../image/service8.jpg";
import photo8 from "../image/service8.jpg";

function Product() {
  const items = [
    {
      id: 1,
      title: "Branding & Creative",
      image: photo1,
      text1: "Branding & Creative",
      text2: "Digital Agencies",
      text3: "Creative Agencies",
      text4: "Product Design Companies"
    },
    {
      id: 2,
      title: "Website & Interface",
      image: photo2,
      text1: "Web Design Companies",
      text2: " eCommerce Development Companies",
      text3: "Web Development Companies",
      text4: "WordPress Web Design Companies"
    },
    {
      id: 3,
      title: "Marketing",
      image: photo3,
      text1: "Web Design Companies",
      text2: " eCommerce Development Companies",
      text3: "Web Development Companies",
      text4: "WordPress Web Design Companies"
    },
    {
      id: 4,
      title: "Software & App",
      image: photo4,
      text1: "Web Design Companies",
      text2: " eCommerce Development Companies",
      text3: "Web Development Companies",
      text4: "WordPress Web Design Companies"
    },
    {
      id: 5,
      title: "IT Services",
      image: photo5,
      text1: "Web Design Companies",
      text2: " eCommerce Development Companies",
      text3: "Web Development Companies",
      text4: "WordPress Web Design Companies"
    },
    {
      id: 6,
      title: "Bussiness Services",
      image: photo6,
      text1: "Bussiness Conslting Firms",
      text2: "Market Research Companies",
      text3: "Call Center Companies",
      text4: "WordPress Web Design Companies"
    },
    {
      id: 7,
      title: "Bussiness Services",
      image: photo7,
      text1: "Bussiness Conslting Firms",
      text2: "Market Research Companies",
      text3: "Call Center Companies",
      text4: "WordPress Web Design Companies"

    },
    {
      id: 8,
      title: "Bussiness Services",
      image: photo8,
      text1: "Bussiness Conslting Firms",
      text2: "Market Research Companies",
      text3: "Call Center Companies",
      text4: "WordPress Web Design Companies"
    },
  ];
  return (
    <div className="w-full relative overflow-hidden bg-white text-black py-16 md:py-12 mt-14">
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-12 space-y-5">
          <h1 className="text-blue-700 text-center underline text-xl">SERVICES</h1>
          <h1 className="text-3xl md:text-5xl font-bold text-black">
            <span>Comprehensive  </span>
            <span className="text-blue-700"> Digital Solutions</span>
          </h1>
          <p className="text-wrap text-gray-600">Our team of experts leverages cutting-edge strategies to boost your online presence and drive growth.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white border-gray-500 border rounded-2xl shadow-lg p-2 space-y-3"
            >
              <img src={item.image} className="w-full h-[350px] md:h-[260px] border rounded-xl"/>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl md:text-2xl font-bold text-blue-500">
                  {item.title}
                </h2>
              </div>

              <div className="space-y-2">
                {[
                  item.text1,
                  item.text2,
                  item.text3,
                  item.text4
                ].map((text, idx) => (
                  <p
                    key={idx}
                    className="text-sm md:text-md text-gray-700 font-medium hover:text-blue-700 hover:scale-105 cursor-pointer transition-colors duration-500"
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
