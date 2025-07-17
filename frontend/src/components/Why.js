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
        "Our tech gurus dont't speak in code, they speak in solutions that'll make you go whoa",
    },
    {
      id: 2,
      image: "02",
      title: "Kid Fashion E-commerce",
      description:
        "Our strategists don't just think outside the box, they redefine the entire playing field",
    },
    {
      id: 3,
      image: "03",
      title: "Women Fashion E-commerce",
      description:
        "Our designers don't just create pixels, they weave magic that'll make your brand sparkle!",
    },
  ];
  return (
    <div className="w-full bg-white text-black py-12 md:py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-screen-md mx-auto text-center space-y-6 md:space-y-8">
          <p className="text-base md:text-lg font-semibold uppercase tracking-wider text-blue-700 underline">
            CASE STUDIES
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            <span className="text-gray-700">Crafting </span>
            <span className="text-blue-700"> Digital Experiences</span>
          </h1>
          <p className="text-gray-500 text-xl">
            We are passionate about crafting unique digital experiences that
            resonate with audiences. Our tailored strategies have driven
            significant results for our clients, propelling their growth in the
            digital space.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 mt-12">
          {steps.map((item) => (
            <div
              key={item.id}
              className="text-center border border-blue-100 bg-white rounded-2xl shadow-lg cursor-pointer p-3 space-y-1 md:space-y-6"
            >
              <h1 className="mx-auto mb-4 border border-gray-600 bg-blue-100 text-blue-700 rounded-full w-14 p-3 text-xl">
                {item.image}
              </h1>
              <h3 className="text-xl md:text-2xl font-bold text-black mb-2">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Why;
