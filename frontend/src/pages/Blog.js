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
      heading: "Email marketing",
      para: "Learn actionable steps to increase your followers, engagement, and conversions using Instagram marketing.",
    },
    {
      id: 4,
      img: "",
      heading: "PPC Ads",
      para: "Learn actionable steps to increase your followers, engagement, and conversions using Instagram marketing.",
    },
    {
      id: 5,
      img: "",
      heading: "Web Development",
      para: "Learn actionable steps to increase your followers, engagement, and conversions using Instagram marketing.",
    },
  ];
  return (
    <div className="w-full h-screen">
      <h1 className="bg-gradient-to-b to-white from-blue-300 p-12 text-center w-full text-2xl text-black font-bold">
        Our Blog
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl md:text-2xl font-bold text-blue-500">
                {item.heading}
              </h2>
              <span className="w-10 h-10">{item.image}</span>
            </div>

            <div className="space-y-2">
              {[item.para].map((para, idx) => (
                <p
                  key={idx}
                  className="text-base md:text-lg text-black font-medium cursor-pointer transition-colors duration-500"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full justify-center items-center bg-gradient-to-b to-blue-300 from-white p-6 mt-14">
        <div className="max-w-screen-xl mx-auto grid items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 gap-10 sm:gap-8 md:gap-12 space-x-4 mb-2">
          <h1 className="text-center font-bold text-black text-lg sm:text-md md:text-3xl lg:text-5xl">
            Join thousands of business owners & companies who trust The Seven!
          </h1>
          <div className="flex justify-center items-center gap-4 md:gap-8 lg:gap-14">
            <button className="p-2 rounded-full w-full md:w-[250px] font-bold text-sm md:text-lg text-black bg-gradient-to-r to-white from-blue-500 hover:bg-gradient-to-l to-white from-blue-500 duration-300">
              Contact us
            </button>
            <button className="p-2 rounded-full w-full md:w-[250px] font-bold text-sm md:text-lg text-black bg-gradient-to-r to-blue-500 from-white hover:bg-gradient-to-l to-blue-500 from-white duration-300">
              Request a call back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
