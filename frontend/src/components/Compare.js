import React from "react";

function Compare() {
  return (
    <div className="w-full bg-gradient-to-t from-white to-blue-50 px-4 py-12">
      <div className="max-w-screen-xl mx-auto text-center space-y-8">
        <h1 className="text-3xl md:text-5xl font-bold">
          <span className="text-black">What </span>
          <span className="text-blue-400">Sets Searchenix Apart</span>
          <span className="text-black">
            {" "}
            from Other Digital Marketing Agencies?
          </span>
        </h1>
        <div className="overflow-x-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 w-full min-w-[700px] md:min-w-full mt-6">
            <div className="border rounded-xl shadow-lg bg-white p-6 space-y-6">
              <h2 className="bg-gray-800 text-white font-bold text-2xl md:text-2xl lg:text-4xl py-4 rounded-lg">
                Traditional Agencies
              </h2>
              <ul className="space-y-4 sm:space-y-4 md:space-y-6 lg:space-y-12 text-left">
                <li className="text-lg md:text-xl lg:text-2xl text-black font-semibold">
                  Focus on vanity metrics
                </li>
                <li className="text-lg md:text-xl lg:text-2xl text-black font-semibold">
                  Incremental improvements
                </li>
                <li className="text-lg md:text-xl lg:text-2xl text-black font-semibold">
                  Cookie-cutter approaches
                </li>
                <li className="text-lg md:text-xl lg:text-2xl text-black font-semibold">
                  Reactive to market trends
                </li>
                <li className="text-lg md:text-xl lg:text-2xl text-black font-semibold">
                  Limited cross-channel integration
                </li>
              </ul>
            </div>
            <div className="border rounded-xl shadow-lg bg-white p-6 space-y-6">
              <h2 className="bg-blue-800 text-white font-bold text-2xl md:text-2xl lg:text-4xl py-4 rounded-lg">
                Searchenix Agencies
              </h2>
              <ul className="space-y-4 sm:space-y-4 md:space-y-6 lg:space-y-12 text-left">
                <li className="text-lg md:text-xl lg:text-2xl text-black font-semibold">
                  Data-driven strategies
                </li>
                <li className="text-lg md:text-xl lg:text-2xl text-black font-semibold">
                  Growth-focused execution
                </li>
                <li className="text-lg md:text-xl lg:text-2xl text-black font-semibold">
                  Tailor-made solutions
                </li>
                <li className="text-lg md:text-xl lg:text-2xl text-black font-semibold">
                  Proactive market adaptation
                </li>
                <li className="text-lg md:text-xl lg:text-2xl text-black font-semibold">
                  Seamless cross-channel integration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Compare;
