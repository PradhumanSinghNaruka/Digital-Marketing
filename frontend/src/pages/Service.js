import React, { useState } from "react";
import photo3 from "../image/servicedetail3.png";
import photo4 from "../image/servicedetail4.png";
import photo5 from "../image/servicedetail5.png";
import photo6 from "../image/servicedetail6.png";
import photo7 from "../image/servicedetail7.jpg";
import photo8 from "../image/servicedetail8.jpg";
import photo9 from "../image/servicedetail9.jpg";
import photo10 from "../image/servicedetail10.jpg";
import photo11 from "../image/servicedetail11.jpg";
import { IoIosArrowForward } from "react-icons/io";
import photo from "../image/servicedetail1.jpg";
import photo1 from "../image/blog2.jpg";
import photo2 from "../image/servicedetail2.jpg";
import { useNavigate } from "react-router-dom";

function Service() {
  const [activeTab, setActiveTab] = useState(1);
  const items = [
    {
      id: 1,
      img: photo3,
      heading: "Business Goals",
      para: "We align marketing strategies with business objectives to drive growth and achieve milestones.",
    },
    {
      id: 2,
      img: photo4,
      heading: "Target Market",
      para: "Our strategies target the right audience, delivering the perfect message effectively.",
    },
    {
      id: 3,
      img: photo5,
      heading: "Industry Trends",
      para: "Stay competitive with strategies leveraging industry trends to keep your brand relevant.",
    },
    {
      id: 4,
      img: photo6,
      heading: "Brand Vision",
      para: "We ensure every strategy aligns with your brand’s voice, vision, and consistency.",
    },
  ];

  const steps = [
    {
      id: 1,
      heading: "Conversion Rate",
      para: "Boosted conversion rates with customized marketing and data-driven optimization.",
      number: "+35%",
    },
    {
      id: 2,
      heading: "ROI Growth",
      para: "Achieved significant ROI through strategic ad placements and targeted campaigns.",
      number: "+300%",
    },
    {
      id: 3,
      heading: "Organic Traffic",
      para: "Boosted organic search traffic with advanced SEO and content strategies.",
      number: "+200%",
    },
    {
      id: 4,
      heading: "Engagement Rate",
      para: "Improved social media engagement through targeted content and audience interaction.",
      number: "+50%",
    },
  ];

  const numbers = [
    {
      id: 1,
      number: "+50%",
      text: "FOLLOWERS GROWTH",
    },
    {
      id: 2,
      number: "+35%",
      text: "ENGRAVED RATES",
    },
    {
      id: 3,
      number: "+40%",
      text: "SOCIALS REFERALS",
    },
  ];

  const numbers2 = [
    {
      id:1,
      number: "+200%",
      text: "ORGANIC TRAFFIC"
    },
    {
      id:2,
      number: "#3",
      text: "COMPETITIVE KEYWORDS"
    },
    {
      id:3,
      number: "+35%",
      text: "CLICK-THROUGH RATES"
    }
  ]

  return (
    <div
      name="Home"
      className="w-full min-h-screen grid overflow-hidden mt-12 md:mt-16 bg-white"
    >
      <div className="w-full h-[90vh] md:h-[80vh] bg-gray-900 items-center text-center justify-between space-y-8">
        <div className="space-y-4 md:space-y-8 px-12 md:px-28 lg:px-36">
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl justify-between font-bold mt-20">
            Service
          </h1>
          <p className="text-white text-md flex text-center justify-center items-center gap-2">
            Home
            <IoIosArrowForward className="text-blue-700 text-center" />
            <p> Service </p>
          </p>
          <p className="text-white">
            Nulla risus eros, imperdiet in finibus non, mollis et turpis.
            Aliquam erat volutpat. Nunc at lacus a purus pretium volutpat nec
            quis mi. Ut vulputate rutrum malesuada.
          </p>
        </div>
        <div className="w-full h:[200px] md:h-[360px] justify-center items-center text-center px-36 hidden md:block">
          <img src={photo} className="w-full h-full rounded-xl" />
        </div>
      </div>
      <div className="mt-28 md:mt-52 px-8 mb-12">
        <div className="w-full flex mt-12">
          <div className="bg-white w-1/2 space-y-5">
            <h1 className="text-blue-600">360 DIGITAL MARKETING OVERVIEW</h1>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              <span className="text-gray-500">
                Comprehensive Solutions For Complete Online{" "}
              </span>
              <span className="text-blue-700 underline"> Success</span>
            </h1>
            <p className="text-wrap text-gray-500">
              Our 360 Digital Marketing Services cover every aspect of your
              digital presence, from strategy to execution. We ensure cohesive
              and impactful results across SEO, social media, email marketing,
              and more.
            </p>
            <hr />
            <div className="flex gap-6 text-gray-500">
              <h1>✔️Social Media Marketing</h1>
              <h1>✔️SEO</h1>
              <h1>✔️Email Marketing</h1>
              <h1>✔️Analytics</h1>
            </div>
            <button className="text-white bg-blue-700 rounded-full p-3 font-bold mt-3 hover:bg-blue-900">
              Request a Session
            </button>
          </div>
          <div className="text-white w-1/2 justify-center items-center">
            <img src={photo2} className="rounded-2xl" />
          </div>
        </div>
        <div className="mt-32 w-full mb-20">
          <div className="bg-white w-full space-y-5 justify-center items-center text-center px-48">
            <h1 className="text-blue-500 text-md">Core Channels</h1>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold px-24">
              <span className="text-gray-500">
                Leveraging Every Digital Platform to Boost Your{" "}
              </span>
              <span className="text-blue-700 underline"> Brand</span>
            </h1>
            <p className="text-wrap text-gray-500">
              We optimize key digital channels like Social Media Marketing, SEO,
              Email Marketing, and Analytics & Reporting to grow your brand.
              Each channel is crafted to engage your audience and drive
              measurable results.
            </p>
          </div>
          <div className="w-full px-4">
            <div className="flex border rounded-xl mt-12 space-x-6 bg-gray-200 py-4">
              <h1
                onClick={() => setActiveTab(1)}
                className={`p-3 text-center w-[270px] border rounded-md duration-300 cursor-pointer ml-6 ${
                  activeTab === 1
                    ? "bg-blue-600 text-white"
                    : "hover:bg-blue-600 hover:text-white"
                }`}
              >
                Social Media Marketing
              </h1>
              <h1
                onClick={() => setActiveTab(2)}
                className={`p-3 text-center w-[270px] border rounded-md duration-300 cursor-pointer ${
                  activeTab === 2
                    ? "bg-blue-600 text-white"
                    : "hover:bg-blue-600 hover:text-white"
                }`}
              >
                SEO
              </h1>
              <h1
                onClick={() => setActiveTab(3)}
                className={`p-3 text-center w-[270px] border rounded-md duration-300 cursor-pointer ${
                  activeTab === 3
                    ? "bg-blue-600 text-white"
                    : "hover:bg-blue-600 hover:text-white"
                }`}
              >
                Email Marketing
              </h1>
              <h1
                onClick={() => setActiveTab(4)}
                className={`p-3 text-center w-[270px] border rounded-md duration-300 cursor-pointer ${
                  activeTab === 4
                    ? "bg-blue-600 text-white"
                    : "hover:bg-blue-600 hover:text-white"
                }`}
              >
                Analytics
              </h1>
            </div>
            <div className="w-full mt-16">
              {activeTab === 1 && (
                <div className="w-full flex gap-8">
                  <div className="w-2/5">
                    <img src={photo8} className="w-full h-full rounded-xl" />
                  </div>
                  <div className="w-3/5 space-y-8">
                    <h1 className="text-3xl text-gray-500 font-semibold">
                      Boost Brand Visibility and Engagement on Key Platforms
                    </h1>
                    <p className="text-gray-400">
                      Maximize your brand’s presence on the platforms your
                      audience loves...
                    </p>
                    <div className="flex flex-cols-1 md:flex-rows-3 gap-6 mt-12 md:mt-16">
                      {numbers.map((number) => (
                        <div
                          key={number.id}
                          className="bg-white rounded-xl flex justify-center items-center text-center border border-gray-200 gap-8"
                        >
                          <div className="grid justify-items-center items-start md:items-center gap-6 flex-1 p-4">
                            <p className="text-blue-600 text-2xl font-bold">
                              {number.number}
                            </p>
                            <p className="text-gray-500 text-md">
                              {number.text}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 2 && (
                <div className="w-full flex gap-8">
                  <div className="w-2/5">
                    <img src={photo9} className="w-full h-full rounded-xl" />
                  </div>
                  <div className="w-3/5 space-y-8">
                    <h1 className="text-3xl text-gray-500 font-semibold">
                      Improve Your Search Rankings And Drive Organic Traffic
                    </h1>
                    <p className="text-gray-400">
                      Climb to the top of search results with our expert SEO
                      services...
                    </p>
                    <div className="flex flex-cols-1 md:flex-rows-3 gap-6 mt-12 md:mt-16">
                      {numbers2.map((number2) => (
                        <div
                          key={number2.id}
                          className="bg-white rounded-xl flex justify-center items-center text-center border border-gray-200 gap-8"
                        >
                          <div className="grid justify-items-center items-start md:items-center gap-6 flex-1 p-4">
                            <p className="text-blue-600 text-2xl font-bold">
                              {number2.number}
                            </p>
                            <p className="text-gray-500 text-md">
                              {number2.text}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 3 && (
                <div className="w-full flex gap-8">
                  <div className="w-2/5">
                    <img src={photo10} className="w-full h-full rounded-xl" />
                  </div>
                  <div className="w-3/5 space-y-8">
                    <h1 className="text-3xl text-gray-500 font-semibold">
                      Personalized Email Campaigns For Higher Conversions
                    </h1>
                    <p className="text-gray-400">
                      Run personalized email campaigns that convert better and
                      boost engagement...
                    </p>
                    <div className="flex flex-cols-1 md:flex-rows-3 gap-6 mt-12 md:mt-16">
                      {numbers.map((number) => (
                        <div
                          key={number.id}
                          className="bg-white rounded-xl flex justify-center items-center text-center border border-gray-200 gap-8"
                        >
                          <div className="grid justify-items-center items-start md:items-center gap-6 flex-1 p-4">
                            <p className="text-blue-600 text-2xl font-bold">
                              {number.number}
                            </p>
                            <p className="text-gray-500 text-md">
                              {number.text}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 4 && (
                <div className="w-full flex gap-8">
                  <div className="w-2/5">
                    <img src={photo11} className="w-full h-full rounded-xl" />
                  </div>
                  <div className="w-3/5 space-y-8">
                    <h1 className="text-3xl text-gray-500 font-semibold">
                      Detailed Performance Reports To Track Progress And
                      Optimize Strategies
                    </h1>
                    <p className="text-gray-400">
                      Get detailed performance reports to monitor growth and
                      improve your strategies...
                    </p>
                    <div className="flex flex-cols-1 md:flex-rows-3 gap-6 mt-12 md:mt-16">
                      {numbers2.map((number2) => (
                        <div
                          key={number2.id}
                          className="bg-white rounded-xl flex justify-center items-center text-center border border-gray-200 gap-8"
                        >
                          <div className="grid justify-items-center items-start md:items-center gap-6 flex-1 p-4">
                            <p className="text-blue-600 text-2xl font-bold">
                              {number2.number}
                            </p>
                            <p className="text-gray-500 text-md">
                              {number2.text}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="mt-32 px-8 mb-12">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
            <div className="md:w-1/2 flex flex-col items-start text-start space-y-4">
              <p className="text-base md:text-md font-semibold uppercase tracking-wider text-blue-500">
                CUSTOM STRATEGIC
              </p>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold w-full">
                <span className="text-gray-500">
                  Tailored Solutions for Your Unique Business{" "}
                </span>
                <span className="text-blue-700 underline"> Needs</span>
              </h1>
            </div>
            <div className="md:w-1/2 flex flex-row justify-end mt-4 items-start text-start gap-6">
              <p className="text-gray-500 text-wrap">
                We create personalized marketing strategies based on your
                business goals, target market, and industry trends. Our approach
                ensures that your campaigns are effective and aligned with your
                brand vision
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 md:mt-16 mb-24">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl flex justify-center items-center text-center border border-gray-300"
              >
                <div className="grid justify-items-center items-start md:items-center gap-6 flex-1 p-4">
                  <img src={item.img} className="w-10 h-10 rounded-xl" />
                  <h1 className="text-blue-700 text-2xl rounded-md font-semibold">
                    {item.heading}
                  </h1>
                  <p className="text-gray-500 text-md font-semibold">
                    {item.para}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 md:mt-28">
            <div className="grid md:justify-between md:items-start gap-8">
              <div className="wfull flex flex-col items-center text-center space-y-4 px-14 md:px-44">
                <p className="text-base md:text-md font-semibold uppercase tracking-wider text-blue-500">
                  PROVEN RESULTS
                </p>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold w-full">
                  <span className="text-gray-600">
                    Focused on Delivering Tangible{" "}
                  </span>
                  <span className="text-blue-700 underline"> Outcomes</span>
                </h1>
                <p className="text-gray-500 text-wrap">
                  Explore our latest blog posts on social media strategies, SEO
                  techniques, and digital marketing trends. Stay ahead in the
                  fast-evolving world of digital marketing.
                </p>
              </div>
              <div className="w-full flex gap-6">
                <div className="w-1/2 justify-center items-center text-center">
                  <img src={photo7} className="w-full h-full rounded-2xl" />
                </div>
                <div className="w-1/2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
                    {steps.map((step) => (
                      <div
                        key={step.id}
                        className="bg-white border-gray-100 border rounded-2xl shadow-md p-4 space-y-4"
                      >
                        <h1 className="text-black font-semibold text-xl">
                          {step.heading}
                        </h1>
                        <p className="text-wrap text-gray-600">{step.para}</p>
                        <h1 className="text-3xl text-blue-700 font-bold">
                          {step.number}
                        </h1>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
