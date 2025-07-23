import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import photo from "../image/blog1.jpg";
import photo1 from "../image/blog2.jpg";
import { IoTime } from "react-icons/io5";

function Blog() {
  const items = [
    {
      id: 1,
      img: photo1,
      heading: "Digital Marketing",
      para: "Crafting Your Digital Identity: The Role of a Social Media Agency",
      date: "March 5, 2024",
    },
    {
      id: 2,
      img: photo,
      heading: "Analytics",
      para: "Beyond Likes: Understanding Metrics in Social Media Marketing",
      date: "March 5, 2024",
    },
    {
      id: 3,
      img: photo1,
      heading: "Content Strategy",
      para: "Strategic Storytelling: The Heart of Effective Social Media Campaigns",
      date: "March 5, 2024",
    },
    {
      id: 4,
      img: photo1,
      heading: "Business Growth",
      para: "ROI Unleashed: How a Digital Marketing Agency Boosts Your Business",
      date: "March 5, 2024",
    },
    {
      id: 5,
      img: photo,
      heading: "Trends and Insights",
      para: "Navigating Trends: Staying Ahead in the Dynamic World of Social Media",
      date: "March 5, 2024",
    },
    {
      id: 6,
      img: photo,
      heading: "Community Building",
      para: "Building Connections: Community Engagement in Digital Marketing",
      date: "March 5, 2024",
    },
  ];

  return (
    <div
      name="Home"
      className="w-full min-h-screen grid overflow-hidden mt-12 md:mt-16 bg-white"
    >
      <div className="w-full h-[90vh] md:h-[80vh] bg-gray-900 items-center text-center justify-between space-y-8">
        <div className="space-y-4 md:space-y-8 px-12 md:px-28 lg:px-36">
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl justify-between font-bold mt-20">
            Blog
          </h1>
          <p className="text-white text-md flex text-center justify-center items-center gap-2">
            Home
            <IoIosArrowForward className="text-blue-700 text-center" />
            <p> Blog</p>
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
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          <div className="md:w-1/2 flex flex-col items-start text-start space-y-4">
            <p className="text-base md:text-lg font-semibold uppercase tracking-wider text-blue-500">
              BLOG
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold w-full">
              <span className="text-gray-500">Stay Updated on Digital </span>
              <span className="text-blue-700 underline"> Trends</span>
            </h1>
          </div>
          <div className="md:w-1/2 flex flex-row justify-start mt-4 items-start text-start gap-6">
            <p className="text-gray-500 text-wrap">
              Explore our latest blog posts on social media strategies, SEO
              techniques, and digital marketing trends. Stay ahead in the
              fast-evolving world of digital marketing.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 md:mt-16">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl"
            >
              <div className="grid items-start md:items-center gap-6 flex-1 p-4">
                <img src={item.img} className="w-full h-full rounded-xl"/>
                <h1 className="text-blue-700 text-md rounded-md">{item.heading}</h1>
                <p className="text-black text-xl font-semibold">
                  {item.para}
                </p>
                <p className="flex gap-2 text-gray-600">
                  <IoTime className="mt-1"/>
                  {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
