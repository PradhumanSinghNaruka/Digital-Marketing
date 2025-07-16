import React from "react";
import Home from "./pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./pages/About";
import Service from "./pages/Service";
import Contactus from "./pages/Contactus";
import Blog from "./pages/Blog";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Scroll from "./components/Schroll";

function App() {
  return (
    <Router>
      <Scroll/>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <Footer />
    </Router>
    // <>
    //   <Router>
    //     <Navbar />
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/service" element={<Service />} />
    //       <Route path="/contactus" element={<Contactus />} />
    //       <Route path="/blog" element={<Blog />} />
    //     </Routes>
    //     <Footer />
    //   </Router>
    // </>
  );
}

export default App;
