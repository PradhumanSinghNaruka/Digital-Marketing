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
    }
  ];
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <div
        name="Home"
        className="w-full px-4 md:px-20 text-black mb-12 md:mb-2 md:mt-12 bg-blue-100"
      >
        <div className="max-w-screen-2xl mx-auto grid w-full p-8">
          <h1 className="text-center text-5xl text-blue-800 font-bold">Frequently Questions</h1>
          <div className="md:w-full mt-12 order-2 space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4 border-b pb-4 space-y-4 border rounded-xl p-6 shadow-sm bg-white">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="text-left w-full text-xl md:text-2xl font-medium text-black hover:underline hover:text-blue-500 duration-300"
                >
                  {faq.question}
                </button>
                {openIndex === index && (
                  <p className="mt-2 text-gray-700 text-sm md:text-xl">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Questions;
