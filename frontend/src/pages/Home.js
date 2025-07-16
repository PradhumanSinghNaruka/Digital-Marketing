import React from 'react';
import Navbar from '../components/Navbar.js';
import Hero from '../components/Hero.js';
import Steps from '../components/Steps.js';
import Product from '../components/Product.js';
import Why from '../components/Why.js';
import Contact from '../components/Contact.js';
import Questions from '../components/Questions.js';
import Compare from '../components/Compare.js';
import Footer from '../components/Footer.js';

function Home() {
  return (
    <>
      <div>
        <Hero />
        <Steps />
        <Why />
        <Product />
        <Contact />
        <Questions />
        <Compare/>
      </div>
    </>
  )
}

export default Home
