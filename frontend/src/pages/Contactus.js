import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { CiFacebook, CiTwitter } from "react-icons/ci";
import { AiOutlineYoutube } from "react-icons/ai";

function Contactus() {
  return (
    <div className="w-full mt-14">
      <h1 className="bg-gradient-to-b from-blue-300 to-white py-12 text-center w-full text-3xl md:text-4xl lg:text-5xl text-black font-bold">
        Contact Us
      </h1>
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        <div className="text-center mb-10 space-y-6">
          <h2 className="font-bold text-3xl md:text-5xl">
            <span className="text-black">Questions?</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        <form className="space-y-6 max-w-3xl mx-auto">
          <div className="flex flex-col">
            <label className="font-semibold text-black mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter Your Full Name"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-black mb-1">
              Mobile Number
            </label>
            <input
              type="tel"
              placeholder="Enter Your Mobile Number"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-black mb-1">
              Your Message
            </label>
            <textarea
              placeholder="Enter Your Message"
              rows="5"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          <div className="text-center">
            <button className="px-6 py-3 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600 transition w-full md:w-full">
              Send Message
            </button>
          </div>
        </form>
      </div>
      <div className="w-full py-12 bg-gradient-to-b from-white to-blue-300">
        <div className="text-center space-y-6">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">
            Let&apos;s get social!
          </h2>
          <div className="flex justify-center flex-wrap gap-4 md:gap-8">
            <FaInstagram className="text-blue-500 border border-blue-500 rounded-full w-12 h-12 md:w-16 md:h-16 p-3 hover:bg-blue-500 hover:text-white transition" />
            <CiFacebook className="text-blue-500 border border-blue-500 rounded-full w-12 h-12 md:w-16 md:h-16 p-3 hover:bg-blue-500 hover:text-white transition" />
            <CiTwitter className="text-blue-500 border border-blue-500 rounded-full w-12 h-12 md:w-16 md:h-16 p-3 hover:bg-blue-500 hover:text-white transition" />
            <AiOutlineYoutube className="text-blue-500 border border-blue-500 rounded-full w-12 h-12 md:w-16 md:h-16 p-3 hover:bg-blue-500 hover:text-white transition" />
            <FaWhatsapp className="text-blue-500 border border-blue-500 rounded-full w-12 h-12 md:w-16 md:h-16 p-3 hover:bg-blue-500 hover:text-white transition" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
