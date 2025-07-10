import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Steps from './components/Steps';
import Product from './components/Product';
import Why from './components/Why';
import Contact from './components/Contact';
import Questions from './components/Questions';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Steps />
        <Why />
        <Product />
        <Contact />
        <Questions />
      </div>
    </>
  )
}

export default App
