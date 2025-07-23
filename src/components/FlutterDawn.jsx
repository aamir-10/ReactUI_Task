import React from 'react';
import './FlutterDawn.css';
import { FiArrowUpRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const FlutterDawn = () => {
  const fadeScaleVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        when: "beforeChildren",
        staggerChildren: 0.2,
      }
    }
  };

  const fadeItem = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <motion.section
      className="flutter-dawn-section"
      variants={fadeScaleVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="left-column" variants={fadeItem}>
        <h2>Flutter's<br />Dawn</h2>
        <p>History of flutter</p>
      </motion.div>

      <motion.div className="right-column" variants={fadeItem}>
        <div className="text-and-button">
          <p>
            Uncover the fascinating story of Flutter in ‘Flutter’s Dawn: History of Flutter.’
            From humble origins to global acclaim, delve into its captivating narrative.
            Explore milestones, triumphs, and challenges. Whether tech enthusiast or curious mind,
            join us on this captivating journey! <a href="/" aria-disabled="true">Click to begin!</a>
          </p>
          <button className="begin-button">
            BEGIN <FiArrowUpRight size={20} />
          </button>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default FlutterDawn;
