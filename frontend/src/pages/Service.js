import React from "react";
import photo1 from "../image/service1.jpg";
import photo2 from "../image/service2.jpg";
import photo4 from "../image/service4.jpg";
import photo5 from "../image/service5.jpg";

function Service() {
  return (
    <div className="w-full mt-14">
      <h1 className="bg-gradient-to-b from-blue-300 to-white py-12 text-center w-full text-3xl md:text-4xl lg:text-5xl text-black font-bold">
        Our Services
      </h1>
      <div className="space-y-14 w-full">
        <div className="max-w-screen-2xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              A team of professionals, passionate about new technologies & progress
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Quisque nec quam convallis, scelerisque risus in, viverra ipsum.
              Mauris sed molestie magna. Nunc auctor aliquet tortor in venenatis.
              Suspendisse potenti. Etiam quis suscipit nulla. Cras at facilisis
              risus, nec accumsan urna. Praesent congue aliquet nisi, lorem eu
              hendrerit sem lobortis nec.
            </p>
            <div className="flex flex-wrap justify-between">
              <div>
                <p className="text-xl md:text-2xl text-blue-600 font-bold">est. 2024</p>
                <p className="text-base md:text-lg">A decade of expertise</p>
              </div>
              <div>
                <p className="text-xl md:text-2xl text-blue-600 font-bold">100%</p>
                <p className="text-base md:text-lg">Satisfied Customers</p>
              </div>
            </div>
          </div>
          <div>
            <img src={photo1} alt="Service 1" className="w-full h-[350px] md:h-[450px] object-cover rounded-2xl shadow" />
          </div>
        </div>
        <div className="max-w-screen-2xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              A team of professionals, passionate about new technologies & progress
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Quisque nec quam convallis, scelerisque risus in, viverra ipsum.
              Mauris sed molestie magna. Nunc auctor aliquet tortor in venenatis.
              Suspendisse potenti. Etiam quis suscipit nulla. Cras at facilisis
              risus, nec accumsan urna. Praesent congue aliquet nisi, lorem eu
              hendrerit sem lobortis nec.
            </p>
            <div className="flex flex-wrap justify-between">
              <div>
                <p className="text-xl md:text-2xl text-blue-600 font-bold">est. 2024</p>
                <p className="text-base md:text-lg">A decade of expertise</p>
              </div>
              <div>
                <p className="text-xl md:text-2xl text-blue-600 font-bold">100%</p>
                <p className="text-base md:text-lg">Satisfied Customers</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img src={photo2} alt="Service 2" className="w-full h-[350px] md:h-[450px] object-cover rounded-2xl shadow" />
          </div>
        </div>
        <div className="max-w-screen-2xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              A team of professionals, passionate about new technologies & progress
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Quisque nec quam convallis, scelerisque risus in, viverra ipsum.
              Mauris sed molestie magna. Nunc auctor aliquet tortor in venenatis.
              Suspendisse potenti. Etiam quis suscipit nulla. Cras at facilisis
              risus, nec accumsan urna. Praesent congue aliquet nisi, lorem eu
              hendrerit sem lobortis nec.
            </p>
            <div className="flex flex-wrap justify-between">
              <div>
                <p className="text-xl md:text-2xl text-blue-600 font-bold">est. 2024</p>
                <p className="text-base md:text-lg">A decade of expertise</p>
              </div>
              <div>
                <p className="text-xl md:text-2xl text-blue-600 font-bold">100%</p>
                <p className="text-base md:text-lg">Satisfied Customers</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img src={photo4} alt="Service 3" className="w-full h-[350px] md:h-[450px] object-cover rounded-2xl shadow" />
          </div>
        </div>
        <div className="max-w-screen-2xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              A team of professionals, passionate about new technologies & progress
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Quisque nec quam convallis, scelerisque risus in, viverra ipsum.
              Mauris sed molestie magna. Nunc auctor aliquet tortor in venenatis.
              Suspendisse potenti. Etiam quis suscipit nulla. Cras at facilisis
              risus, nec accumsan urna. Praesent congue aliquet nisi, lorem eu
              hendrerit sem lobortis nec.
            </p>
            <div className="flex flex-wrap justify-between">
              <div>
                <p className="text-xl md:text-2xl text-blue-600 font-bold">est. 2024</p>
                <p className="text-base md:text-lg">A decade of expertise</p>
              </div>
              <div>
                <p className="text-xl md:text-2xl text-blue-600 font-bold">100%</p>
                <p className="text-base md:text-lg">Satisfied Customers</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img src={photo5} alt="Service 4" className="w-full h-[350px] md:h-[450px] object-cover rounded-2xl shadow" />
          </div>
        </div>
      </div>
      <div className="w-full bg-gradient-to-b from-white to-blue-300 py-12">
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

export default Service;
