import React, { useState } from 'react';
import './ExpandableServices.css';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    title: 'Flutter App Development',
    description: (
      <>
        Unlock endless possibilities with Flutter App Development. Build beautiful,
        high-performance applications for any platform – faster and easier than ever before.
        Ready to revolutionize your app experience?{' '}
        <a href="/get-started" className="cta-link">Let’s get started today!</a>
      </>
    )
  },
  {
    title: 'UI/UX Design',
    description: `Craft intuitive and visually stunning designs to ensure seamless user experiences that align with your brand and boost engagement.`
  },
  {
    title: (
      <>
        Customization <span className="fancy-ampersand">&</span> Integration
      </>
    ),
    description: `Tailor apps to your business needs with smooth integration of third-party services and scalable features.`
  },
  {
    title: (
      <>
        Testing <span className="fancy-ampersand">&</span> Quality Assurance
      </>
    ),
    description: `Ensure your app works flawlessly with rigorous testing practices and detailed quality checks.`
  },
  {
    title: (
      <>
        Maintenance <span className="fancy-ampersand">&</span> Support
      </>
    ),
    description: `Keep your app up-to-date and bug-free with ongoing maintenance, support, and performance monitoring.`
  },
  {
    title: (
      <>
        Consulting <span className="fancy-ampersand">&</span> Training
      </>
    ),
    description: `Empower your team with expert guidance and training sessions on Flutter best practices and strategies.`
  },
  {
    title: (
      <>
        Migration <span className="fancy-ampersand">&</span> Upgrades
      </>
    ),
    description: `Seamlessly migrate legacy systems or upgrade existing apps to the latest Flutter version with minimal disruption.`
  }
];

const ExpandableServices = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="expandable-services">
      <div className="services-left">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`service-item ${activeIndex === index ? 'active' : ''}`}
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
