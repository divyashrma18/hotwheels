import React, { useState } from "react";
import "./Hero.css";
import Navbar from "./Navbar";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const wheels = [
    {
        src: "/images/hotwheel1.png",
        color: "#53070C", 
        title: "Twin Mill",
        tagline: "Maroon Fury",
        description: `An iconic Hot Wheels legend with twin exposed engines and a sleek maroon-black body. 
                      Designed for pure power, style, and unmistakable street presence.`,
        style: { width: "1200px", top: "50px", left: "-390px" },
      },
      {
        src: "/images/hotwheel5.png",
        color: "#0F0A0A", 
        title: " Bel Air Gasser",
        tagline: "Drag King",
        description: `A legendary hot-rod built for pure drag-strip attitude. 
                      High stance, explosive power, and vintage swagger 
                      make the Gasser an unmistakable icon.`,
        style: { width: "1150px", top: "110px", left: "-420px" },
      },
      {
        src: "/images/hotwheel2.png",
        color: "#041E2E",
        title: "’67 Camaro",
        tagline: "Classic Muscle",
        description: `A timeless American icon. 
                      The ’67 Camaro blends raw muscle with sleek style, 
                      delivering bold performance and unmistakable street presence.`,
        style: { width: "1200px", top: "120px", left: "-380px" },
      },
      
      {
        src: "/images/hotwheel3.png",
        color: "#2A0A0D",
        title: "Bone Shaker",
        tagline: "Skull & Steel",
        description: `The iconic Hot Wheels beast with its signature skull grille and raw attitude. 
                      A low, loud, and fearless ride built to dominate every road.`,
        style: { width: "1000px", top: "100px", left: "-420px" },
      },
      
      {
        src: "/images/hotwheel4.png",
        color: "#0A0F14", 
        title: "Deora II",
        tagline: "Surf & Style",
        description: `A futuristic Hot Wheels icon with sleek curves and a bold silhouette. 
                      The Deora II blends custom surf culture with timeless concept-car design.`,
        style: { width: "1100px", top: "140px", left: "-420px" },
      },
        
  ];
  

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const nextWheel = () => {
    setCurrent((prev) => (prev + 1) % wheels.length);
  };

  const prevWheel = () => {
    setCurrent((prev) => (prev - 1 + wheels.length) % wheels.length);
  };

  return (
    <motion.div
      className="hero"
      animate={{
        background: `
          radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, transparent 60%),
          linear-gradient(to right, ${wheels[current].color}, ${wheels[current].color})
        `,
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <Navbar />
      <div className="hero-content">
        <div className="hero-text">
  <AnimatePresence mode="wait">
    <motion.div
      key={current}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <h1>{wheels[current].title}</h1>
      <p className="tagline">{wheels[current].tagline}</p>
      <p className="description">{wheels[current].description}</p>
    </motion.div>
  </AnimatePresence>
</div>


        <div className="hero-wheel">
          <div className="arrow left" onClick={prevWheel}>
            <FiChevronLeft size={24} />
          </div>

          <div className="wheel-wrapper">
            <img src="/images/circle.png" alt="Circle" className="circle" />

            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={wheels[current].src}
                alt={`Harley ${current + 1}`}
                className="wheel"
                style={wheels[current].style} 
                initial={{ opacity: 0, scale: 0.8 }}
                animate ={{opacity:1 , scale:1}}
                exit={{opacity:0, scale:0.8}}
                transition={{duration:0.6, ease:"easeInOut"}}
              />
            </AnimatePresence>
          </div>

          <div className="arrow right" onClick={nextWheel}>
            <FiChevronRight size={24} />
          </div>
        </div>
        <div className="hero-cta">
          <button className="btn buy">Buy Now</button>
          <button className="btn details">View Details</button>
        </div>
       
      </div>
    </motion.div>
  );
};

export default Hero;