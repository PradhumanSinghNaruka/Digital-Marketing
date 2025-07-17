import React from "react";

function Compare() {
  const steps = [
    {
      id: 1,
      title: "Beauty Live Selling",
      description:
        "Our tech gurus dont't speak in code, they speak in solutions that'll make you go whoa",
      price: "$100",
      month: "/month",
      text: "Includes :",
      text1: "✔️Social Media Marketing",
      text2: "✔️Basic Website Developemt",
      text3: "✔️SEO Started pack",
    },
    {
      id: 2,
      title: "Beauty Live Selling",
      description:
        "Our tech gurus dont't speak in code, they speak in solutions that'll make you go whoa",
      price: "$100",
      month: "/month",
      text: "Includes :",
      text1: "✔️Social Media Marketing",
      text2: "✔️Basic Website Developemt",
      text3: "✔️SEO Started pack",
    },
    {
      id: 3,
      title: "Beauty Live Selling",
      description:
        "Our tech gurus dont't speak in code, they speak in solutions that'll make you go whoa",
      price: "$100",
      month: "/month",
      text: "Includes :",
      text1: "✔️Social Media Marketing",
      text2: "✔️Basic Website Developemt",
      text3: "✔️SEO Started pack",
    },
  ];
  return (
    <div className="w-full bg-white text-black py-12 md:py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-screen-md mx-auto text-center space-y-6 md:space-y-8">
          <p className="text-base md:text-lg font-semibold uppercase tracking-wider text-blue-700 underline">
            PRICING
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            <span className="text-blue-700"> Digital Growth </span>
            <span className="text-gray-700"> Pricing </span>
          </h1>
          <p className="text-gray-500 text-xl">
            Elevate your brand’s digital footprint with our specially curated
            Digital Growth Packages. Select the plan that aligns with your
            ambitions and witness your brand thrive in the digital era.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 mt-12">
          {steps.map((item) => (
            <div
              key={item.id}
              className="text-center border bg-white rounded-2xl shadow-lg cursor-pointer p-3 space-y-4 md:space-y-8 border-gray-400"
            >
              <h3 className="text-xl md:text-2xl font-bold text-black mb-2">
                {item.title}
              </h3>
              <p className="text-sm md:text-md text-gray-600">
                {item.description}
              </p>
              <div className="flex bg-gray-200 text-blue-800 border rounded-md font-bold w-full p-3">
                <h1 className="mx-auto text-xl">
                  {item.price}
                <p className="text-blue-700 text-sm font-thin">{item.month}</p>                
                </h1>
              </div>
              <h1 className="text-black text-lg md:text-xl text-start">
                {item.text}
              </h1>
              <h1 className="text-gray-600 text-md text-start">{item.text1}</h1>
              <h1 className="text-gray-600 text-md text-start">{item.text2}</h1>
              <h1 className="text-gray-600 text-md text-start">{item.text3}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Compare;
