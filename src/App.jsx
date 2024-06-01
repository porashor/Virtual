import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Features from './Components/Features';
import WorkFlow from './Components/WorkFlow';
import Pricing from './Components/Pricing';
import Testimonial from './Components/Testimonial';
import Foother from './Components/Foother';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
      <WorkFlow/>
      <Pricing/>
      <Testimonial/>
      <Foother/>
    </div>
  )
}

export default App
