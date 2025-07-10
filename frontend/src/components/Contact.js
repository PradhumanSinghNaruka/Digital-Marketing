import React from "react";

function Contact() {
  return (
    <div className="max-w-screen-xl w-full">
      <div className="max-w-screen-xl mx-auto justify-center items-center mt-12 mb-12">
        <div className="justify-center items-center text-center mt-8 space-y-4">
          <div className="grid justify-center items-center text-center">
            <h1 className="font-bold text-blue-900 text-5xl p-4 mb-4">
              Get In Touch
            </h1>
            <div className="flex space-x-8 mt-4">
              <div className="grid">
                <label className="font-semibold text-blue-600 text-md text-start">
                  Enter Your Full name
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="p-3 border border-black rounded-md"
                />
              </div>
              <div className="grid">
                <label className="font-semibold text-blue-600 text-md text-start">
                  Enter Your Email
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email ID"
                  className="p-3 border border-black rounded-md"
                />
              </div>
            </div>
            <label className="font-semibold text-blue-600 text-md text-start mt-2">
              Enter Your Number
            </label>
            <input
              type="number"
              placeholder="Enter Your Mobile Number"
              className="p-3 border border-black rounded-md"
            />
            <label className="font-semibold text-blue-600 text-md text-start mt-2">
              Enter Your Message
            </label>
            <textarea
              type="message"
              placeholder="Enter Your Message"
              className="p-3 border border-black rounded-md"
            />
            <button className="w-[200px] text-center font-bold mt-2 p-3 rounded-md shadow-md bg-blue-600 text-white hover:bg-blue-800 duration-300">
              Sent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
