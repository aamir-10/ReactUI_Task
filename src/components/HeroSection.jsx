import React from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <motion.div
        className="hero-text"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Unlock the Potential<br />of Flutter</h1>
        <p>Your Premier Partner for Cross-Platform<br />App Excellence!</p>
        <motion.button
          className="hero-btn"
        >
          UPGRADE YOUR TECH
        </motion.button>
      </motion.div>

      <motion.div
        className="hero-image-overlay"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <img src="/hero.png" alt="Base" className="base-img" />
        <img src="/hero1.png" alt="Overlay 1" className="overlay-img overlay-1" />
        <img src="/hero2.png" alt="Overlay 2" className="overlay-img overlay-2" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
