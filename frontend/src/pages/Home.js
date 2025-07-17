import React from 'react';
import Hero from '../components/Hero.js';
import Steps from '../components/Steps.js';
import Product from '../components/Product.js';
import Why from '../components/Why.js';
import Contact from '../components/Contact.js';
import Questions from '../components/Questions.js';
import Compare from '../components/Compare.js';
import Data from '../components/Data.js';

function Home() {
  return (
    <>
      <div>
        <Hero />
        <Steps />
        <Data />
        <Product />
        <Why />
        <Compare/>
        <Questions />
      </div>
    </>
  )
}

export default Home 
