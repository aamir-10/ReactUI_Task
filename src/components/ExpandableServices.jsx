import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";
import "./Services.css";

const services = [
  {
    title: "Flutter App Development",
    description:
      "We craft high-performance mobile apps using Flutter, enabling seamless cross-platform experiences with native performance.",
  },
  {
    title: "Backend API Integration",
    description:
      "Robust backend integrations using RESTful APIs and GraphQL ensure your app connects securely and efficiently with servers and databases.",
  },
  {
    title: "UI/UX Design",
    description:
      "Our designers create beautiful, user-centered interfaces tailored to maximize usability, engagement, and user retention.",
  },
  {
    title: "App Store Deployment",
    description:
      "From testing to launch, we handle the entire deployment process for both iOS and Android platforms with best practices.",
  },
];

const ExpandableServices = () => {
  const [activeIndex, setActiveIndex] = useState(null); // ✅ No section expanded initially

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="expandable-services">
      <div className="services-left">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`service-item ${activeIndex === index ? "active" : ""}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="service-header" onClick={() => toggleIndex(index)}>
              <h3>{service.title}</h3>
              <span className="icon">
                {activeIndex === index ? <FiMinus /> : <FiPlus />}
              </span>
            </div>

            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.p
                  className="service-description"
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {service.description}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="services-right"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <img
          src="/flutter-dev.png"
          alt="Flutter Development"
          className="services-image"
        />
      </motion.div>
    </section>
  );
};

export default ExpandableServices;
