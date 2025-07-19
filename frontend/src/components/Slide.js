import React from "react";

const slides = [
  {
    title: "",
    desc: "",
    bg: "",
  },
  {
    title: "",
    desc: "",
    bg: "",
  },
  {
    title: "",
    desc: "",
    bg: "",
  },
  {
    title: "",
    desc: "",
    bg: "",
  }
];

function Slide() {
  return (
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory">
      {slides.map((slide, index) => (
        <section
          key={index}
          className={`h-screen w-full flex flex-col items-center justify-center ${slide.bg} snap-start`}
        >
          <h2 className="text-5xl font-bold text-blue-700 mb-4">
            {slide.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-xl text-center">
            {slide.desc}
          </p>
        </section>
      ))}
    </div>
  );
}

export default Slide;
