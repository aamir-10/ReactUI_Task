import React from "react";
import "./Sidebar.css";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

function Sidebar() {
  return (
    <div className="sidebar">
      <motion.div
        className="sidebar-top"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.img
          src="/logo.png"
          alt="Logo"
          className="sidebar-logo"
          variants={itemVariants}
        />

        <motion.button className="contact-button" variants={itemVariants}>
          CONTACT US
        </motion.button>

        <motion.nav className="sidebar-nav">
          {["App Development", "Challenges", "Hire Developer", "Community"].map(
            (item, index) => (
              <motion.a key={index} href="#" variants={itemVariants}>
                {item}
              </motion.a>
            )
          )}
        </motion.nav>
      </motion.div>
    </div>
  );
}

export default Sidebar;
