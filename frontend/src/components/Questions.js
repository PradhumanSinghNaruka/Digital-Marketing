import React, { useState } from "react";

function Questions() {
  const faqs = [
    {
      question: "What is Digital Marketing?",
      answer:
        "Digital marketing or online marketing is a strategic approach to promote brands on digital platforms and connect with potential buyers. These platforms include web-based advertising, social media, email, and text and multimedia messages.",
    },
    {
      question: "What are the type of Digital Marketing?",
      answer:
        "Digital marketing services can be broken into the 8 types: Search Engine Optimization (SEO), Content Marketing, Social Media Marketing, Pay-per-Click (PPC), Email Marketing, Influencer Marketing, Marketing Analytics and Affiliate Marketing. A top digital marketing company will cover all this (and then some more!)",
    },
    {
      question: "How i choose best Digital Marketing?",
      answer:
        "Aligned with your Goals and Outcomes.Services Offered,Proof is in the pudding,Team,No Tall claims, Easy to Get in Touch",
    },
    {
      question: "What does a Digital Marketing agency do?",
      answer:
        "A digital marketing agency offers a wide range of services to help businesses establish and grow their online presence. Some of the most common digital marketing services include:",
    },
    {
      question: "What invest in Digital Marketing?",
      answer:
        "As of 2022, 69% of the world's population, or 4.9 billion people, actively use the internet, with the average internet user spending at least 145 mins online every day. That’s a lot of people spending a lot of time online, but if you still need to be convinced, here are 6 great reasons you should invest in digital marketing.",
    },
    {
      question: "Why Choose Searchenix?",
      answer:
        "Apart from the fact that we are the best, you should choose AdLift for the following reasons.",
    },
    {
      question: "How does Digital Marketing work for B2C company?",
      answer:
        "B2B digital marketing refers to a market where businesses are the purchasers of goods and services from other businesses. As digital platforms become the most important means of conducting business, digital marketing gives you roadmap for increasing online visibility and expanding market share. B2B digital marketing has several key components that aim to grow your business online and get those much-needed leads. ",
    },
    {
      question: "What is B2B bussiness?",
      answer:
        "B2C marketing uses social media, email campaigns, and influencer marketing to drive sales.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <div
        name="Home"
        className="w-full px-4 md:px-20 py-12 bg-gradient-to-b from-white to-blue-50"
      >
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-center text-3xl md:text-5xl font-bold mb-12">
            <span className="text-blue-400">Frequently</span>{" "}
            <span className="text-black">Questions</span>
          </h1>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-blue-200 rounded-xl p-6 shadow-md bg-white transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full text-left text-lg md:text-2xl font-semibold text-black"
                >
                  <span>{faq.question}</span>
                  <svg
                    className={`w-6 h-6 transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openIndex === index ? "max-h-96 mt-4" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-700 text-sm md:text-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Questions;
