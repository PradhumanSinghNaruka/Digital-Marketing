import React from "react";
import photo1 from "../image/service1.jpg";
import photo2 from "../image/service2.jpg";
import photo3 from "../image/service4.jpg";
import photo4 from "../image/service5.jpg";
import photo5 from "../image/service6.jpg";
import photo6 from "../image/service7.jpg";
import photo7 from "../image/service8.jpg";
import photo8 from "../image/service8.jpg";

function Product() {
  const items = [
    {
      id: 1,
      title: "360 Digital Marketing",
      image: photo1,
      text1: "We provide comprehensive digital marketing services to maximize your online presence.",
      text2: "✔️Social Media Marketing",
      text3: "✔️SEO",
      text4: "✔️Email Marketing",
      text5: "✔️Analytics & Reporting"
    },
    {
      id: 2,
      title: "Social Media Management",
      image: photo2,
      text1: "We manage your social media platforms, ensuring consistent and engaging content.",
      text2: "✔️Social Media Marketing",
      text3: "✔️SEO",
      text4: "✔️Email Marketing",
      text5: "✔️Analytics & Reporting"
    },
    {
      id: 3,
      title: "Website Development",
      image: photo3,
      text1: "We design and develop responsive websites that represent your brand.",
      text2: "✔️Social Media Marketing",
      text3: "✔️SEO",
      text4: "✔️Email Marketing",
      text5: "✔️Analytics & Reporting"
    },
    {
      id: 4,
      title: "Host Live Commerce",
      image: photo4,
      text1: "We host live selling events to engage your audience and boost sales.",
      text2: "✔️Social Media Marketing",
      text3: "✔️SEO",
      text4: "✔️Email Marketing",
      text5: "✔️Analytics & Reporting"
    },
    {
      id: 5,
      title: "Search Engine Optimization",
      image: photo5,
      text1: "We optimize your website to rank higher on search engines, increasing visibility",
      text2: "✔️Social Media Marketing",
      text3: "✔️SEO",
      text4: "✔️Email Marketing",
      text5: "✔️Analytics & Reporting"
    },
    {
      id: 6,
      title: "Brand Identity Design",
      image: photo6,
      text1: "We design unique & memorable brand identities that resonate with your target audience",
      text2: "✔️Social Media Marketing",
      text3: "✔️SEO",
      text4: "✔️Email Marketing",
      text5: "✔️Analytics & Reporting"
    },
    {
      id: 7,
      title: "Photo & Video Creation",
      image: photo7,
      text1: "We create high-quality photos and videos to enhance your brand’s visual content.",
      text2: "✔️Social Media Marketing",
      text3: "✔️SEO",
      text4: "✔️Email Marketing",
      text5: "✔️Analytics & Reporting"

    },
    {
      id: 8,
      title: "Content Marketing",
      image: photo8,
      text1: "We create high-quality content that resonates with your audience & builds brand loyalty.",
      text2: "✔️Social Media Marketing",
      text3: "✔️SEO",
      text4: "✔️Email Marketing",
      text5: "✔️Analytics & Reporting"
    },
  ];
  return (
    <div className="w-full relative overflow-hidden bg-white text-black py-16 md:py-12 mt-14">
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-12 space-y-5">
          <h1 className="text-blue-600 text-center text-md">SERVICES</h1>
          <h1 className="text-3xl md:text-5xl font-bold text-black">
            <span className="text-gray-500">Comprehensive Digital </span>
            <span className="text-blue-700 underline"> Solutions</span>
          </h1>
          <p className="text-wrap text-gray-500">Our team of experts leverages cutting-edge strategies to boost your online presence and drive growth.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white border-gray-400 border rounded-2xl shadow-lg p-4 space-y-4"
            >
              <img src={item.image} className="w-full h-[350px] md:h-[260px] border rounded-xl transition-transform duration-300 hover:-translate-y-2"/>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl md:text-3xl font-bold text-blue-800">
                  {item.title}
                </h2>
              </div>

              <div className="space-y-2">
                <h2 className="text-md md:text-md text-gray-500">
                  {item.text1}
                </h2>
                {[
                  item.text2,
                  item.text3,
                  item.text4
                ].map((text, idx) => (
                  <p
                    key={idx}
                    className="text-md md:text-md text-gray-500 cursor-pointer transition-colors duration-500"
                  >
                    {text}
                  </p>
                ))}
                <button className="p-3 px-6 py-2 rounded-full text-semibold justify-start items-start bg-blue-700 text-white hover:bg-blue-900">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
