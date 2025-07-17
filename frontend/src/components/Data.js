import React from "react";

function Data() {
  const steps = [
    {
      id: 1,
      title: "Successful Campaigns",
      description:
        "Our strategies have led to over 200 successful campaigns",
      number: "200 +"
    },
    {
      id: 2,
      title: "Happy Clients",
      description:
        "over 100 satisfied clients who have seen their businesses grow",
      number: "100 +"
    },
    {
      id: 3,
      title: "Average ROI",
      description:
        "On average, our clients have seen a 500% return on investment.",
      number: "500 %"
    },
    {
      id: 4,
      title: "Impressions",
      description:
        "Our campaigns have garnered over 10 million impressions.",
      number: "10 M+"
    },
  ];
  return (
    <div className="w-full bg-white text-black">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
          {steps.map((item) => (
            <div
              key={item.id}
              className="border border-blue-200 bg-white rounded-md shadow-lg cursor-pointer p-5 space-y-2"
            >
              <h3 className="text-lg md:text-xl font-bold text-black mb-2">
                {item.title}
              </h3>
              <p className="text-sm md:text-md text-gray-600">
                {item.description}
              </p>
              <h2 className="text-sm md:text-3xl lg:text-4xl text-blue-700 font-semibold">
                {item.number}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Data;