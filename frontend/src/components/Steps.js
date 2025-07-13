import React from "react";
import { FaUserGear, FaUsersGear } from "react-icons/fa6";
import { MdMenuBook } from "react-icons/md";
import { CiPen } from "react-icons/ci";
import { RiSpeakLine } from "react-icons/ri";

function Steps() {
  const steps = [
    {
      id: 1,
      image: <FaUserGear className="w-24 h-24" />,
      title: "Tech",
      description:
        "Our tech gurus dont't speak in code, they speak in solutions that'll make you go whoa",
    },
    {
      id: 2,
      image: <MdMenuBook className="w-24 h-24" />,
      title: "Strategy",
      description:
        "Our strategists don't just think outside the box, they redefine the entire playing field",
    },
    {
      id: 3,
      image: <CiPen className="w-24 h-24" />,
      title: "Design",
      description:
        "Our designers don't just create pixels, they weave magic that'll make your brand sparkle!",
    },
    {
      id: 4,
      image: <RiSpeakLine className="w-24 h-24" />,
      title: "Marketing",
      description:
        "Our marketers don't just sell products, they craft experiences that'll make your customers swoon!",
    },
  ];
  return (
    <div className="w-full bg-gradient-to-b from-white to-blue-50 text-black py-12 md:py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-screen-md mx-auto text-center space-y-6 md:space-y-8">
          <p className="text-base md:text-lg font-semibold uppercase tracking-wider text-black">
            Best Digital Marketing Agency In Jaipur
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            <span className="text-black">We Create </span>
            <span className="text-blue-400">Extraordinary</span>
            <span className="text-black"> Digital Solutions.</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 mt-12 md:mt-20">
          {steps.map((item) => (
            <div
              key={item.id}
              className="text-center border border-blue-200 bg-white rounded-2xl shadow-lg hover:shadow-2xl duration-300 hover:scale-105 cursor-pointer p-5"
            >
              <div className="mx-auto mb-4 flex justify-center items-center">{item.image}</div>
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

export default Steps;
