import React from "react";
import photo5 from "../image/why.png";
import { FaLaptopCode } from "react-icons/fa";
import { FaSearchLocation } from "react-icons/fa";
import { FaLaptopMedical } from "react-icons/fa";
import { HiDevicePhoneMobile } from "react-icons/hi2";

function Why() {
  return (
    <div className="flex flex-col md:flex-row h-full md:h-full bg-gradient-to-r from-transparent to-[rgb(111,178,245)]">
      {/* <div className="md:w-1/2 w-full h-64 md:h-full text-black flex flex-col justify-center md:sticky md:top-0 px-6 md:px-12 space-y-4 md:space-y-7 mt-6">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-left">
          WHY SEARCHENIX ?
        </h1>
        <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-left leading-tight">
          Discover Our Expertise as a Digital Marketing Company
        </h1>
        <p className="text-xl text-wrap font-semibold">
          As a full-service web design agency, we handle all your digital needs
          under one roof. Our custom web design services include thorough
          research and planning, bespoke designs and digital strategies tailored
          to grow your reach, drive traffic and encourage engagement.
        </p>
        <img src={photo5} className="h-full"/>
      </div> */}
      <div className="md:w-1/2 w-full md:h-72 text-black flex flex-col justify-top md:sticky md:top-0 px-6 md:px-12 py-10 md:py-20 space-y-6">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
          WHY SEARCHENIX ?
        </h1>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Discover Our Expertise as a Digital Marketing Company
        </h2>
        <p className="text-base md:text-xl font-medium">
          As a full-service web design agency, we handle all your digital needs
          under one roof. Our custom web design services include thorough
          research and planning, bespoke designs and digital strategies tailored
          to grow your reach, drive traffic and encourage engagement.
        </p>
        <img
          src={photo5}
          alt="Searchenix Visual"
          className="w-full max-w-[350px] md:max-w-[400px] rounded-lg object-cover mx-auto md:mx-0"
        />
      </div>

      <div className="md:w-1/2 w-full overflow-y-auto">
        <div className="p-6 md:p-8 space-y-8">
          <div className="w-full border border-blue-500 p-4 space-y-4 backdrop-blur-4xl cursor-pointer hover:scale-105 duration-300">
            <FaLaptopCode className="w-14 h-14 md:w-16 md:h-16 lg:w-24 lg:h-24 border rounded-full border-black p-4" />
            <h1 className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl font-bold">
              Custom Web Design
            </h1>
            <p className="text-base md:text-md lg:text-xl font-semibold">
              Each website we create is meticulously crafted to deliver a 100%
              unique online experience tailored to your brand. Our expert
              designers transform your vision into a dynamic, custom design that
              enhances your brand’s visibility, boosts engagement, and drives
              conversions. With us, your website will not only stand out but
              also connect deeply with your audience.{" "}
            </p>
          </div>
          <div className="w-full border border-blue-500 p-4 space-y-4 backdrop-blur-4xl cursor-pointer hover:scale-105 duration-300">
            <FaSearchLocation className="w-16 h-16 md:w-24 md:h-24 border rounded-full border-black p-4" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Search Engine Optimization
            </h1>
            <p className="text-base md:text-xl font-semibold">
              We offer a comprehensive range of services designed to boost your
              website’s ranking and attract organic, non-paid Google search
              traffic. Our team can conduct a thorough SEO audit of your
              website, providing actionable insights and strategies to enhance
              your organic reach and visibility on search engines.{" "}
            </p>
          </div>
          <div className="w-full border border-blue-500 p-4 space-y-4 backdrop-blur-4xl cursor-pointer hover:scale-105 duration-300">
            <FaLaptopMedical className="w-16 h-16 md:w-24 md:h-24 border rounded-full border-black p-4" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              eCommerce Design & Development
            </h1>
            <p className="text-base md:text-xl font-semibold">
              We specialize in design and development for leading content
              management systems (CMSs) like Shopify, Magento, and WooCommerce.
              Our experts can help you build and scale your eCommerce website
              across platforms, ensuring a seamless and robust online shopping
              experience for your customers.{" "}
            </p>
          </div>
          <div className="w-full border border-blue-500 p-4 space-y-4 backdrop-blur-4xl cursor-pointer hover:scale-105 duration-300">
            <HiDevicePhoneMobile className="w-16 h-16 md:w-24 md:h-24 border rounded-full border-black p-4" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              UX/UI Web Design
            </h1>
            <p className="text-base md:text-xl font-semibold">
              Our award-winning designers use trusted methods and innovative
              approaches to create engaging visual experiences and seamless user
              journeys. Whether you’re looking to build a custom UX/UI or
              redesign your current one, we’ll enhance your visual identity and
              ensure your website is both aesthetically pleasing and highly
              functional.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
