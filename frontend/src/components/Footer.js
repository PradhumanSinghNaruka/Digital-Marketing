import React from "react";
import photo from "../image/logo4.png";

function Footer() {
  return (
    <footer className="w-full bg-[#0C0F1F] text-gray-400">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="md:col-span-2 flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            {/* <img src={photo} className="h-36 sm:h-36 md:h-32 cursor-pointer"/> */}
            <h1 className="text-2xl text-white font-bold">Searchnix</h1>
          </div>
          <p className="text-sm">
            Balaji Communication Digiroket
          </p>
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.464 15.464 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C10.3 21 3 13.7 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.26 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z" />
            </svg>
            <span>+91 8107773336</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8l8 5 8-5v10H4z" />
            </svg>
            <span>psn@gmail.com</span>
          </div>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-white hover:text-blue-500">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white hover:text-blue-500">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-blue-500">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Right side columns */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <a href="#" className="hover:text-white">
            About Us
          </a>
          <a href="#" className="hover:text-white">
            Career
          </a>
          <a href="#" className="hover:text-white">
            Testimonial
          </a>
          <a href="#" className="hover:text-white">
            Team
          </a>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="text-white font-semibold mb-4">Explore</h3>
          <a href="#" className="hover:text-white">
            Service
          </a>
          <a href="#" className="hover:text-white">
            Case Study
          </a>
          <a href="#" className="hover:text-white">
            Blog
          </a>
          <a href="#" className="hover:text-white">
            Location
          </a>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <a href="#" className="hover:text-white">
            Pricing
          </a>
          <a href="#" className="hover:text-white">
            FAQs
          </a>
          <a href="#" className="hover:text-white">
            Contact Us
          </a>
          <a href="#" className="hover:text-white">
            Resource
          </a>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="text-white font-semibold mb-4">Operational Hours</h3>
          <p>Mon – Wed : 9AM – 6PM</p>
          <p>Thu – Fri : 9AM – 10PM</p>
          <p>Sat – Sun : 10AM – 3PM</p>
        </div>
      </div>

      <div className="border-t border-gray-700 py-6 px-4 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        <span className="text-sm text-gray-500">
          © 2024 All rights reserved by Elsazara Project
        </span>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-sm hover:text-white">
            Privacy
          </a>
          <a href="#" className="text-sm hover:text-white">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
