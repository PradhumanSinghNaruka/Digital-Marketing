import React from "react";

function Blog() {
  const items = [
    {
      id: 1,
      img: "",
      heading: "SEO",
      para: "Stay ahead of the competition with these proven SEO tactics to boost your website’s ranking and organic traffic.",
    },
    {
      id: 2,
      img: "",
      heading: "Social Media",
      para: "Learn actionable steps to increase your followers, engagement, and conversions using Instagram marketing.",
    },
    {
      id: 3,
      img: "",
      heading: "Email Marketing",
      para: "Craft powerful emails that increase open rates, engagement, and drive real conversions for your business.",
    },
    {
      id: 4,
      img: "",
      heading: "PPC Ads",
      para: "Maximize ROI with smart, cost-effective Pay-Per-Click advertising strategies.",
    },
    {
      id: 5,
      img: "",
      heading: "Web Development",
      para: "Build robust, modern websites with best practices in UI, UX, and SEO built-in.",
    },
  ];

  return (
    <div className="w-full mt-14">
      <h1 className="bg-gradient-to-b from-blue-300 to-white py-12 text-center w-full text-3xl md:text-4xl lg:text-5xl text-black font-bold">
        Our Blog
      </h1>
      <div className="max-w-screen-2xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300"
          >
            <div className="mb-4">
              <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-2">
                {item.heading}
              </h2>
              {item.img && (
                <img src={item.img} alt={item.heading} className="w-16 h-16" />
              )}
            </div>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              {item.para}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full bg-gradient-to-b from-white to-blue-100 py-12">
        <div className="max-w-screen-xl mx-auto text-center px-6 space-y-6">
          <h2 className="font-bold text-black text-2xl md:text-4xl lg:text-5xl">
            Join thousands of business owners & companies who trust The Seven!
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
            <button className="px-6 py-3 rounded-full font-bold text-sm md:text-lg text-black bg-gradient-to-r from-blue-400 to-white hover:from-white hover:to-blue-400 transition">
              Contact us
            </button>
            <button className="px-6 py-3 rounded-full font-bold text-sm md:text-lg text-black bg-gradient-to-r from-white to-blue-400 hover:from-blue-400 hover:to-white transition">
              Request a call back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
