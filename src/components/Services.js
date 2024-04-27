import React from "react";
import styles from "../css/Services.module.css";
import {
  FaHome,
  FaBuilding,
  FaChartLine,
  FaHandshake,
  FaVideo,
  FaPersonBooth,
  FaUser,
  FaMagento,
  FaCalendarAlt,
} from "react-icons/fa";

const services = [
  {
    icon: FaHandshake,
    title: "Satisfaction Guarantee",
  },
  {
    icon: FaVideo,
    title: "Virtual Tour Scheduling",
  },
  {
    icon: FaUser,
    title: "Expert Negotiation",
  },
  {
    icon: FaCalendarAlt,
    title: "Dedicated Showing Agent",
  },
];

const Services = () => {
  return (
    <div className={styles.container}>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.iconContainer}>
              <service.icon className={styles.icon} />
            </div>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
