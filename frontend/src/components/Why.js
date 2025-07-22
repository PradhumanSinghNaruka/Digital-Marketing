// import React from "react";
// import photo5 from "../image/why.png";
// import { FaLaptopCode } from "react-icons/fa";
// import { FaSearchLocation } from "react-icons/fa";
// import { FaLaptopMedical } from "react-icons/fa";
// import { HiDevicePhoneMobile } from "react-icons/hi2";

// function Why() {
//   return (
//     <div className="flex flex-col md:flex-row h-full md:h-full bg-white">
//       <div className="md:w-1/2 w-full md:h-72 text-black flex flex-col justify-top md:sticky md:top-0 px-6 md:px-12 py-10 md:py-20 space-y-6">
//         <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
//           WHY SEARCHENIX ?
//         </h1>
//         <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
//           Discover Our Expertise as a Digital Marketing Company
//         </h2>
//         <p className="text-base md:text-xl font-medium">
//           As a full-service web design agency, we handle all your digital needs
//           under one roof. Our custom web design services include thorough
//           research and planning, bespoke designs and digital strategies tailored
//           to grow your reach, drive traffic and encourage engagement.
//         </p>
//         <img
//           src={photo5}
//           alt="Searchenix Visual"
//           className="w-full max-w-[350px] md:max-w-[400px] rounded-lg object-cover mx-auto md:mx-0"
//         />
//       </div>

//       <div className="md:w-1/2 w-full overflow-y-auto">
//         <div className="p-6 md:p-8 space-y-8">
//           <div className="w-full border rounded-xl border-blue-100 p-4 space-y-4 backdrop-blur-4xl cursor-pointer hover:scale-105 duration-300">
//             <FaLaptopCode className="w-14 h-14 md:w-16 md:h-16 lg:w-24 lg:h-24 border rounded-full border-black p-4" />
//             <h1 className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl font-bold">
//               Custom Web Design
//             </h1>
//             <p className="text-base md:text-md lg:text-xl font-semibold">
//               Each website we create is meticulously crafted to deliver a 100%
//               unique online experience tailored to your brand. Our expert
//               designers transform your vision into a dynamic, custom design that
//               enhances your brand’s visibility, boosts engagement, and drives
//               conversions. With us, your website will not only stand out but
//               also connect deeply with your audience.{" "}
//             </p>
//           </div>
//           <div className="w-full border border-blue-500 p-4 space-y-4 backdrop-blur-4xl cursor-pointer hover:scale-105 duration-300">
//             <FaSearchLocation className="w-16 h-16 md:w-24 md:h-24 border rounded-full border-black p-4" />
//             <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
//               Search Engine Optimization
//             </h1>
//             <p className="text-base md:text-xl font-semibold">
//               We offer a comprehensive range of services designed to boost your
//               website’s ranking and attract organic, non-paid Google search
//               traffic. Our team can conduct a thorough SEO audit of your
//               website, providing actionable insights and strategies to enhance
//               your organic reach and visibility on search engines.{" "}
//             </p>
//           </div>
//           <div className="w-full border border-blue-500 p-4 space-y-4 backdrop-blur-4xl cursor-pointer hover:scale-105 duration-300">
//             <FaLaptopMedical className="w-16 h-16 md:w-24 md:h-24 border rounded-full border-black p-4" />
//             <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
//               eCommerce Design & Development
//             </h1>
//             <p className="text-base md:text-xl font-semibold">
//               We specialize in design and development for leading content
//               management systems (CMSs) like Shopify, Magento, and WooCommerce.
//               Our experts can help you build and scale your eCommerce website
//               across platforms, ensuring a seamless and robust online shopping
//               experience for your customers.{" "}
//             </p>
//           </div>
//           <div className="w-full border border-blue-500 p-4 space-y-4 backdrop-blur-4xl cursor-pointer hover:scale-105 duration-300">
//             <HiDevicePhoneMobile className="w-16 h-16 md:w-24 md:h-24 border rounded-full border-black p-4" />
//             <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
//               UX/UI Web Design
//             </h1>
//             <p className="text-base md:text-xl font-semibold">
//               Our award-winning designers use trusted methods and innovative
//               approaches to create engaging visual experiences and seamless user
//               journeys. Whether you’re looking to build a custom UX/UI or
//               redesign your current one, we’ll enhance your visual identity and
//               ensure your website is both aesthetically pleasing and highly
//               functional.{" "}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Why;

import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { SiComma } from "react-icons/si";
import photo from "../image/psn.png";

function Why() {
  const steps = [
    {
      id: 1,
      title:
        "The quality of SozioSync’s services is exceptional. They have significantly boosted my online visibility and helped me connect with potential clients.",
      rating: "5",
      image: photo,
      name: "Pradhuman",
      review: "Web Developer",
    },
    {
      id: 2,
      title:
        "The quality of SozioSync’s services is exceptional. They have significantly boosted my online visibility and helped me connect with potential clients.",
      rating: "4.5",
      image: photo,
      name: "Pradhuman",
      review: "Web Developer",
    },
    {
      id: 3,
      title:
        "The quality of SozioSync’s services is exceptional. They have significantly boosted my online visibility and helped me connect with potential clients.",
      rating: "3",
      image: photo,
      name: "Pradhuman",
      review: "Web Developer",
    },
    {
      id: 4,
      title:
        "The quality of SozioSync’s services is exceptional. They have significantly boosted my online visibility and helped me connect with potential clients.",
      rating: "5",
      image: photo,
      name: "Pradhuman",
      review: "Web Developer",
    },
    {
      id: 5,
      title:
        "The quality of SozioSync’s services is exceptional. They have significantly boosted my online visibility and helped me connect with potential clients.",
      rating: "5",
      image: photo,
      name: "Pradhuman",
      review: "Web Developer",
    },
    {
      id: 6,
      title:
        "The quality of SozioSync’s services is exceptional. They have significantly boosted my online visibility and helped me connect with potential clients.",
      rating: "4.5",
      image: photo,
      name: "Pradhuman",
      review: "Web Developer",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 3 < steps.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const visibleItems = steps.slice(currentIndex, currentIndex + 3);
  return (
    <div className="w-full bg-blue-50 text-black py-12 md:py-20 mt-12 md:mt-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          <div className="md:w-1/2 flex flex-col items-start text-start space-y-4">
            <p className="text-base md:text-md tracking-wider text-blue-600">
              TESTIMONIALS
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold w-full">
              <span className="text-gray-500">What Our Clients Say </span>
              <span className="text-blue-700 underline"> About Us</span>
            </h1>
          </div>
          <div className="md:w-1/2 flex flex-row justify-end mt-4 items-end text-end gap-6">
            <FaLongArrowAltLeft
              onClick={handlePrev}
              className="w-14 h-14 p-4 rounded-lg bg-blue-700 text-white cursor-pointer"
            />
            <FaLongArrowAltRight
              onClick={handleNext}
              className="w-14 h-14 p-4 rounded-lg bg-blue-700 text-white cursor-pointer"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 md:mt-16">
          {visibleItems.map((item) => (
            <div
              key={item.id}
              className="border bg-white rounded-xl p-2 hover:shadow-xl"
            >
              <div className="grid items-start md:items-center gap-6 flex-1 p-4">
                <h1 className="text-gray-500">{item.title}</h1>
                <p className="text-yellow-500 text-xl">
                  {"★".repeat(Math.floor(item.rating))}
                  {"☆".repeat(5 - Math.floor(item.rating))}
                </p>
                <div className="space-y-2 w-full flex gap-2">
                  <div className="w-1/2 flex gap-2">
                    <img
                      src={item.image}
                      alt=""
                      className="w-12 h-12 rounded-full"
                    />
                    <h1 className="font-bold">
                      {item.name}
                      <br />
                      <span className="text-gray-500 font-semibold">
                        {item.review}
                      </span>
                    </h1>
                  </div>
                  <div className="w-1/2 text-end justify-end items-end flex">
                    <SiComma className="text-blue-700 text-end" />
                    <SiComma className="text-blue-700 text-end" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Why;
