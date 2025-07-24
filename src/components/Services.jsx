import React from 'react';
import './Services.css';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <motion.section
      className="services-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="main-heading"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Our Dynamic Services Suite!
      </motion.h2>

      <motion.h3
        className="sub-heading"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Embrace Innovation: Let’s Create Together!
      </motion.h3>

      <motion.p
        className="description"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
      >
        Step into innovation! Explore our range of services and let’s create something extraordinary together. <br />
        Your vision, our expertise. Let’s begin!
      </motion.p>
    </motion.section>
  );
};

export default Services;
