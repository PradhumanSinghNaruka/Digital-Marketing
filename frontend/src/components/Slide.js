import React from "react";
import photo1 from "../image/slide1.jpg";
import photo2 from "../image/slide2.jpg";
import photo3 from "../image/slide3.jpg";
import photo4 from "../image/slide4.jpg";
const slides = [
  {
    number: "01",
    title: "Customized Strategies",
    desc: "We create tailored marketing strategies that align with your brand’s goals.",
    bg: "bg-blue-50",
    text1: "✔️Consultation and Goal Setting",
    text2: "✔️Performance Review Meetings",
    text3: "✔️Data-Driven Optimization",
    text4: "✔️Alignment of Tactics with KPIs",
    img: photo1
  },
  {
    number: "02",
    title: "Creative Excellence",
    desc: "Our team of creative experts brings your brand to life on digital platforms.",
    bg: "bg-blue-100",
    text1: "✔️Consistent Brand Messaging",
    text2: "✔️Content Quality & Engagement",
    text3: "✔️Innovative Campaign Concepts",
    text4: "✔️Industry Recognitions",
    img: photo2
  },
  {
    number: "03",
    title: "Data-Driven Approach",
    desc: "We use data and analytics to drive decision-making and optimize results.",
    bg: "bg-blue-50",
    text1: "✔️Regular Data Audits",
    text2: "✔️Cross-Validation Sources",
    text3: "✔️Continuous Testing & Iteration",
    text4: "✔️User Experience Optimization",
    img: photo3
  },
  {
    number: "04",
    title: "Result-Oriented",
    desc: "We focus on delivering tangible results that contribute to your brand’s growth.",
    bg: "bg-blue-100",
    text1: "✔️Personalized Communication",
    text2: "✔️Proactive Customer Support",
    text3: "✔️Conversion Funnel Analysis",
    text4: "✔️Multivariate Testing",
    img: photo4
  },
];

function Slide() {
  return (
    <div className="mt-24 mb-12">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 px-8">
        <div className="md:w-1/2 flex flex-col items-start text-start space-y-4">
          <p className="text-base md:text-md uppercase tracking-wider text-blue-500">
            CASE STUDIES
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold w-full">
            <span className="text-gray-500">Tailored to Your </span>
            <span className="text-blue-700 underline"> Brand</span>
          </h1>
        </div>
        <div className="md:w-1/2 flex flex-col items-start text-start">
          <p className="text-gray-500 text-md md:text-lg w-full text-wrap">
            We are passionate about crafting unique digital experiences that
            resonate with audiences. Our tailored strategies have driven
            significant results for our clients, propelling their growth in the
            digital space.
          </p>
        </div>
      </div>
      <div className="relative h-[400vh] mt-12 px-8">
        {slides.map((slide, index) => (
          <section
            key={index}
            className={`sticky top-0 h-screen w-full flex flex-row p-4 md:p-8 ${slide.bg} border rounded-xl`}
            style={{ zIndex: index + 1 }}
          >
            <div className="w-1/2 text-start space-y-8 flex flex-col justify-center">
              <h1 className="text-blue-700 text-3xl md:text-5xl font-semibold">
                {slide.number}
              </h1>
              <h2 className="text-4xl font-bold text-black mb-4">
                {slide.title}
              </h2>
              <p className="text-xl text-gray-600 text-start">
                {slide.desc}
              </p>
              <div className="w-full flex">
                <h1 className="w-1/2 space-y-4 text-gray-500">
                  {slide.text1} <br />
                  {slide.text2}
                </h1>
                <h1 className="w-1/2 space-y-4 text-gray-500">
                  {slide.text3} <br />
                  {slide.text4}
                </h1>
              </div>
              <button className="px-8 py-5 rounded-full bg-blue-700 text-white mt-4">
                Learn More
              </button>
            </div>
            <div className="w-1/2 flex justify-center items-center text-center">
              <img
                src={slide.img}
                className="w-full h-full rounded-xl object-cover"
                alt="Slide"
              />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Slide;
