import React from "react";
import photo5 from "../image/logo6.png";

function Why() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: { photo5 } }}
    >
      <div className="absolute inset-0 bg-black/40">
        <img src={photo5} className="h-full w-full" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-white text-center px-4 space-y-12 mt-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          SEO that works
        </h1>
        <p className="text-lg md:text-xl text-wrap max-w-2xl">
          Are you moving from one digital marketing agency to another in search
          of that tailor-made Search Engine Optimization (SEO) plan that
          delivers your business goals? Look no further. Your search for the
          best digital marketing agency ends here - with AdLift.
        </p>
        <p className="text-lg md:text-xl text-wrap max-w-2xl">
          At AdLift, we don’t just focus on keywords. We focus on the big
          picture: bettering your page authority on search engines. This means
          directing more of the right kind of traffic to your site. In a
          nutshell? Not just more visits but visits that convert. Here’s what we
          offer:
        </p>
        <button className="p-3 md:p-4 w-[150px] md:w-[200px] bg-blue-300 text-black text-xl font-semibold space-x-2 hover:bg-blue-400 hover:text-white duration-300 rounded-md cursor-pointer">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Why;
