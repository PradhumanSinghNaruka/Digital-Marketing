import React from "react";

function Compare() {
  const steps = [
    {
      id: 1,
      title: "Essential Presence",
      description:
        "Build a strong online presence with this foundational package. Perfect for startups and small businesses.",
      price: "$799",
      month: "month",
      text: "Includes :",
      text1: "✔️Social Media Marketing",
      text2: "✔️Basic Website Developemt",
      text3: "✔️SEO Started pack",
    },
    {
      id: 2,
      title: "Strategic Impact",
      description:
        "Take your brand to the next level with our Strategic Impact package. Ideal for businesses aiming for growth.",
      price: "$1499",
      month: "month",
      text: "Includes :",
      text1: "✔️Social Media Marketing",
      text2: "✔️Basic Website Developemt",
      text3: "✔️SEO Started pack",
    },
    {
      id: 3,
      title: "Market Dominator",
      description:
        "Ignite engagement and conversions with Market Dominatr. Tailored for businesses ready to dominate in the digital space.",
      price: "$2499",
      month: "month",
      text: "Includes :",
      text1: "✔️Social Media Marketing",
      text2: "✔️Basic Website Developemt",
      text3: "✔️SEO Started pack",
    },
  ];
  return (
    <div className="w-full bg-blue-50 text-black py-12 md:py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-screen-md mx-auto text-center space-y-6 md:space-y-8">
          <p className="text-base md:text-md uppercase tracking-wider text-blue-500">
            PRICING
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="text-gray-500">Digital Growth </span>
            <span className="text-blue-800">Packages</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Elevate your brand’s digital footprint with our specially curated
            Digital Growth Packages. Select the plan that aligns with your
            ambitions and witness your brand thrive in the digital era.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 mt-16">
          {steps.map((item) => (
            <div
              key={item.id}
              className="relative bg-white rounded-2xl shadow-xl p-6 flex flex-col space-y-4 md:space-y-6 border border-gray-200 hover:shadow-2xl transition"
            >
              <h3 className="text-xl md:text-2xl font-bold text-black text-center">
                {item.title}
              </h3>
              <p className="text-gray-500 text-base text-center">
                {item.description}
              </p>
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-bold text-blue-800">
                  {item.price}
                </span>
                <span className="text-sm text-blue-600 font-medium">
                  / {item.month}
                </span>
              </div>
              <div className="space-y-2">
                <p className="text-black text-base">{item.text}</p>
                <p className="text-gray-600 text-sm">{item.text1}</p>
                <p className="text-gray-600 text-sm">{item.text2}</p>
                <p className="text-gray-600 text-sm">{item.text3}</p>
              </div>
              <button className="mt-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Compare;
