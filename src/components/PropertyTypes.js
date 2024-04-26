import React from "react";
import styles from "../css/PropertyTypes.module.css";
import { FaHouseUser, FaBuilding, FaWarehouse, FaBed } from "react-icons/fa";
import Image from "next/image";

const propertyTypes = [
  {
    name: "House",
    icon: FaHouseUser,
    image: "/images/house.jpg",
  },
  {
    name: "Apartment",
    icon: FaBuilding,
    image: "/images/apartment.jpg",
  },
  {
    name: "Office",
    icon: FaWarehouse,
    image: "/images/office.jpeg",
  },
  {
    name: "Room",
    icon: FaBed,
    image: "/images/room.jpeg",
  },
];

const PropertyTypes = () => {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <h2 className={styles.title}>Explore Our Property Types</h2>
        <p className={styles.description}>
          We offer a wide range of properties to meet your diverse needs.
          Explore our collection and find your perfect match.
        </p>
        <div className={styles.propertiesContainer}>
          {propertyTypes.map((type, index) => (
            <div key={index} className={styles.propertyCard}>
              <div className={styles.imageContainer}>
                <Image
                  src={type.image}
                  alt={type.name}
                  width={300}
                  height={200}
                  className={styles.image}
                />
              </div>
              <div className={styles.details}>
                <type.icon className={styles.icon} />
                <h3 className={styles.name}>{type.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyTypes;
