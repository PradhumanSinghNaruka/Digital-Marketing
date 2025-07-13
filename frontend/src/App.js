import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Steps from './components/Steps';
import Product from './components/Product';
import Why from './components/Why';
import Contact from './components/Contact';
import Questions from './components/Questions';
import Compare from './components/Compare';
import Footer from './components/Footer';

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
        <Compare/>
        <Footer/>
      </div>
    </>
  )
}

export default App
