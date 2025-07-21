import React from "react";
import photo1 from "../image/Contact1.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import Questions from "../components/Questions";

function Contactus() {
  return (
    <div
      name="contactus"
      className="w-full min-h-screen grid overflow-hidden mt-12 md:mt-16 bg-white"
    >
      <div className="w-full h-[90vh] md:h-[80vh] bg-gray-900 items-center text-center justify-between space-y-8">
        <div className="space-y-4 md:space-y-8 px-12 md:px-28 lg:px-36">
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl justify-between font-bold mt-20">
            Contact Us
          </h1>
          <p className="text-white text-md flex text-center justify-center items-center gap-2">
            Home
            <IoIosArrowForward className="text-blue-700 text-center" />
            <p> Contact Us</p>
          </p>
          <p className="text-white">
            Nulla risus eros, imperdiet in finibus non, mollis et turpis.
            Aliquam erat volutpat. Nunc at lacus a purus pretium volutpat nec
            quis mi. Ut vulputate rutrum malesuada.
          </p>
        </div>
        <div className="w-full h:[200px] md:h-[360px] justify-center items-center text-center px-36 hidden md:block">
          <img src={photo1} className="w-full h-full rounded-xl" />
        </div>
      </div>
      <div className="mt-28 md:mt-60 px-8 mb-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-7">
          <div className="md:w-1/2 flex flex-col items-start text-start space-y-4">
            <p className="text-base md:text-lg font-semibold uppercase tracking-wider text-blue-500">
              GET IN TOUCH
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold w-full">
              <span className="text-gray-500">
                Let’s Start Building Your Digital{" "}
              </span>
              <span className="text-blue-700 underline"> Success</span>
            </h1>
            <p className="text-gray-600 text-wrap">
              Whether you have a question or are ready to take your brand to the
              next level, we’re here to help. Reach out to our team and let’s
              discuss how we can grow your online presence.
            </p>
            <hr />
            <h1 className="font-semibold text-black text-xl">Head Office</h1>
            <p className="text-gray-600 text-wrap">
              Labuhan Ratu 1 RT 06/01, Way Jepara Sub-District, Lampung Timur
              District, Lampung Province – Indonesia 34396
            </p>
            <div className="w-full flex gap-3">
              <div className="w-1/2 flex gap-2">
                <FaPhoneAlt className="mt-1" />
                <p className="text-black">+1 609-784-6316</p>
              </div>
              <div className="w-1/2 flex gap-2">
                <MdMarkEmailRead className="mt-1" />
                <p className="text-black">mail@yoursite.com</p>
              </div>
            </div>
          </div>
          <div className="w-1/2">
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
                <button className="px-6 py-3 bg-blue-700 text-white font-bold rounded-full hover:bg-blue-900 transition w-full md:w-full">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full h-[450px] mt-12">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2992.5378087879444!2d75.73952805963259!3d26.87977006461311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1753115423916!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="w-full mt-12 mb-12">
        <Questions/>
      </div>
    </div>
  );
}

export default Contactus;
