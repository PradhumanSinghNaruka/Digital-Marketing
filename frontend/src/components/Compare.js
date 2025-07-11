import React from "react";

function Compare() {
  return (
    <div className="w-full mx-auto">
      <div className="max-w-screen-2xl mx-auto p-4 w-full relative flex justify-center items-center mt-24">
        <div className="justify-center items-center">
          <h1 className="text-center">
            <span className="text-black font-thin text-5xl">What </span>
            <span className="text-blue-800 font-semibold text-5xl">
              {" "}
              Sets Single Grain Apart{" "}
            </span>
            <span className="text-black font-thin text-5xl">
              {" "}
              from Other Digital Marketing Agencies?
            </span>
          </h1>
          <div className="bg-white text-black p-8 mt-10 ms:items-center overflow-x-auto flex justify-center items-center content-center">
            <div className="grid grid-cols-3 w-[900px] text-center mt-4 justify-center items-center content-center gap-96 ml-12">
              <div className="w-full h-screen text-center p-2">
                <h1 className="text-3xl p-8 w-[400px] bg-gray-800 text-white border rounded-xl">
                  Traditional Agencies
                </h1>
                <div className="w-[400px] space-y-6 mt-4">
                  <p className="text-black text-2xl">Focus on vanity metrics</p>
                  <p className="text-black text-2xl">Incremental improvements</p>
                  <p className="text-black text-2xl">Cookie-cutter approaches</p>
                  <p className="text-black text-2xl">Reactive to market trends</p>
                  <p className="text-black text-2xl">Limited cross-channel integration</p>
                  <p className="text-black text-2xl">Reactive to market trends</p>
                </div>
              </div>
              <div className="w-full h-screen text-center p-2">
                <h1 className="text-3xl p-8 w-[400px] bg-blue-800 text-white border rounded-xl">
                  Searchenix Agencies
                </h1>
                <div className="w-[400px] space-y-6 mt-4">
                  <p className="text-black text-2xl">Focus on vanity metrics</p>
                  <p className="text-black text-2xl">Reactive to market trends</p>
                  <p className="text-black text-2xl">Focus on vanity metrics</p>
                  <p className="text-black text-2xl">Cookie-cutter approaches</p>
                  <p className="text-black text-2xl">Reactive to market trends</p>
                  <p className="text-black text-2xl">Limited cross-channel integration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Compare;
