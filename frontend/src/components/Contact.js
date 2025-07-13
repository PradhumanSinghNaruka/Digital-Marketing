import React from "react";

function Contact() {
  return (
    <div className="w-full bg-gradient-to-b from-white to-blue-400">
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="font-bold text-4xl md:text-5xl">
            <span className="text-blue-400">Get In </span>
            <span className="text-black">Touch</span>
          </h1>
        </div>
        <form className="space-y-6 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="font-semibold text-black mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="p-3 border rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-black mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="p-3 border rounded-md"
              />
            </div>
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
            <button className="relative inline-flex items-center bg-indigo-50 justify-center px-6 py-3 overflow-hidden font-bold rounded-lg group w-[170px]">
              <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-blue-800 opacity-[3%]"></span>
              <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-blue-400 opacity-100 group-hover:-translate-x-8"></span>
              <span className="relative w-full text-base font-semibold text-center text-gray-900 transition-colors duration-200 ease-in-out group-hover:text-white">
                Send
              </span>
              <span className="absolute inset-0 border-2 rounded-md"></span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
