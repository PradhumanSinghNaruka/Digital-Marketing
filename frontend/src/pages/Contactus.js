import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

function Contactus() {
  return (
    <div className="w-full h-screen">
      <h1 className="bg-gradient-to-b to-white from-blue-300 p-12 text-center w-full text-2xl text-black font-bold">
        Contact Us
      </h1>
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        <div className="text-center mb-10 space-y-6">
          <h1 className="font-bold text-4xl md:text-5xl">
            <span className="text-black">Questions? </span>
          </h1>
          <p className="text-gray-500 font-thin text-md md:text-lg text-wrap">
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
              className="p-3 border rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-black mb-1">
              Mobile Number
            </label>
            <input
              type="number"
              placeholder="Enter Your Mobile Number"
              className="p-3 border rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-black mb-1">
              Your Message
            </label>
            <textarea
              placeholder="Enter Your Message"
              rows="5"
              className="p-3 border rounded-md"
            ></textarea>
          </div>

          <div className="text-center">
            <button className="relative inline-flex items-center bg-blue-500 text-white justify-center px-6 py-3 overflow-hidden font-bold rounded-full group w-full">
              Send Message
            </button>
          </div>
        </form>
      </div>
      <div className="text-center justify-center items-center mt-4 grid space-y-6">
        <h1 className="text-lg md:text-3xl lg:text-5xl font-bold">Let's get social!</h1>
        <div className="flex gap-2 md:gap-12">
            <FaInstagram className="rounded-full border-blue-500 text-blue-500 w-12 h-12 md:w-16 md:h-16 p-3 border-1 md:border-2"/>
            <CiFacebook className="rounded-full border-blue-500 text-blue-500 w-12 h-12 md:w-16 md:h-16 p-3 border-1 md:border-2"/>
            <CiTwitter className="rounded-full border-blue-500 text-blue-500 w-12 h-12 md:w-16 md:h-16 p-3 border-1 md:border-2"/>
            <AiOutlineYoutube className="rounded-full border-blue-500 text-blue-500 w-12 h-12 md:w-16 md:h-16 p-3 border-1 md:border-2"/>
            <FaWhatsapp className="rounded-full border-blue-500 text-blue-500 w-12 h-12 md:w-16 md:h-16 p-3 border-1 md:border-2"/>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
