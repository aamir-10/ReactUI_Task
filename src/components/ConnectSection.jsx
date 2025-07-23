import React from 'react';
import './ConnectSection.css';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const ConnectSection = () => {
  return (
    <section className="connect-wrapper">
      <motion.div
        className="connect-row"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        {/* Left Side */}
        <motion.div className="connect-left" variants={fadeInUp}>
          <nav className="top-nav">
            <ul>
              <li>Events</li>
              <li>Gen AI</li>
              <li>Careers</li>
              <li>Case study</li>
              <li>SME Talks</li>
            </ul>
          </nav>

          <div className="connect-text">
            <p>For any collaborative</p>
            <p>projects or enquiries feel free</p>
            <p>to connect with us.</p>
            <h6 className="connect-site">vayuz.com</h6>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div className="connect-right" variants={fadeInUp}>
          <h2 className="connect-heading">
            Connect <br />
            <span className="connect-subheading">With Us</span>
          </h2>

          <motion.form
            className="connect-form"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Phone Number" />
            <button type="submit">SUBMIT</button>
          </motion.form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ConnectSection;
