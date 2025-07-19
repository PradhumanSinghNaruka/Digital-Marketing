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

import React from "react";

function Why() {
  const steps = [
    {
      id: 1,
      image: "01",
      title: "Beauty Live Selling",
      description:
        "We produced a series of product photos and videos for Connect, a women’s fashion brand. The new media content led to a 25% increase in social media engagement.",
    },
    {
      id: 2,
      image: "02",
      title: "Kid Fashion E-commerce",
      description:
        "We produced a series of product photos and videos for Connect, a women’s fashion brand. The new media content led to a 25% increase in social media engagement.",
    },
    {
      id: 3,
      image: "03",
      title: "Women’s Fashion Lookbook",
      description:
        "We produced a series of product photos and videos for Connect, a women’s fashion brand. The new media content led to a 25% increase in social media engagement.",
    },
  ];
  return (
    <div className="w-full bg-white text-black py-12 md:py-20 mt-12 md:mt-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          <div className="md:w-1/2 flex flex-col items-start text-start space-y-4">
            <p className="text-base md:text-lg font-semibold uppercase tracking-wider text-blue-500">
              CASE STUDIES
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold w-full">
              <span className="text-gray-500">Crafting Digital </span>
              <span className="text-blue-700">Experiences</span>
            </h1>
          </div>
          <div className="md:w-1/2 flex flex-col items-start text-start">
            <p className="text-gray-500 text-md md:text-lg w-full text-wrap">
              We are passionate about crafting unique digital experiences that
              resonate with audiences. Our tailored strategies have driven
              significant results for our clients, propelling their growth in
              the digital space.
            </p>
          </div>
        </div>
        <div className="flex flex-col divide-y divide-gray-200 mt-16 md:mt-24">
          {steps.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row md:items-center justify-between py-6 gap-4"
            >
              <div className="flex items-start md:items-center gap-6 flex-1">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-700 font-bold text-lg">
                  {item.id.toString().padStart(2, "0")}
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-black">{item.title}</h3>
                  <p className="text-gray-500 text-base text-balance">{item.description}</p>
                </div>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 px-3 rounded-full text-sm font-semibold transition">
                Read Detail
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Why;
