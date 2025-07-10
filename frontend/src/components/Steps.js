import React from "react";
import { FaUserGear, FaUsersGear } from "react-icons/fa6";
import { MdMenuBook } from "react-icons/md";
import { CiPen } from "react-icons/ci";
import { RiSpeakLine } from "react-icons/ri";

function Steps() {
  const steps = [
    {
      id: 1,
      image: (
        <FaUserGear className="w-24 h-24 ml-28" />
      ),
      title: "Tech",
      description:
        "Our tech gurus dont't speak in code, they speak in solutions that'll make you go whoa",
    },
    {
      id: 2,
      image: (
        <MdMenuBook className="w-24 h-24 ml-24"/>
      ),
      title: "Strategy",
      description:
        "Our strategists don't just think outside the box, they redefine the entire playing field",
    },
    {
      id: 3,
      image: (
        <CiPen className="w-24 h-24 ml-24" />
      ),
      title: "Design",
      description:
        "Our designers don't just create pixels, they weave magic that'll make your brand sparkle!",
    },
    {
      id: 4,
      image: (
        <RiSpeakLine className="w-24 h-24 ml-28" />
      ),
      title: "Marketing",
      description:
        "Our marketers don't just sell products, they craft experiences that'll make your customers swoon!",
    },
  ];
  return (
    <div className="w-full bg-white text-black mt-8 mb-12">
      <div className="max-w-screen-2xl container mx-auto">
        <div className="max-w-screen-xl justify-center items-center space-y-14">
          <p className="text-lg text-center font-semibold text-wrap">
            Best Digital Marketing Agency In Jaipur
          </p>
          <h1 className="text-2xl font-bold md:text-4xl lg:text-5xl text-balance text-center">
            <span className="text-black">We Create </span>
            <span className="text-blue-500 mb-2">
              Extraordinary Digital Solutions.
            </span>
            
          </h1>
        </div>
        <div className="grid md:grid-cols-4 mt-10 md:mt-16 px-6">
          {steps.map((item) => {
            return (
              <div
                className="text-center border rounded-xl shadow-xl duration-200 hover:scale-105 cursor-pointer p-2"
                key={item.id}
              >
                <div className="mx-auto">
                  <span className="">{item.image}</span>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  {item.title}
                </h3>
                <h3 className="text-xl text-gray-600 mb-2">
                  {item.description}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Steps;
