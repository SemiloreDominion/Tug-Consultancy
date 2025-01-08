import React from 'react';
import Hero from "../../Components/Hero/Hero";
import About from "../../Components/About/About";
import Services from "../../Components/Services/Services";
import Values from "../../Components/Values/Values";

const Home = () => {
  return (
    <div className="container">
      <Hero/>
      <About/>
      <Services/>
      <Values/>
    </div>
  )
}

export default Home
