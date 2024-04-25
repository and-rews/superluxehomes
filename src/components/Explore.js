import React from "react";
import styles from "../css/Explore.module.css";
import Image from "next/image";

const cities = [
  {
    name: "Kumasi",
    thumbnail: "/images/city1.jpg",
    rating: 4.5,
  },
  {
    name: "Accra",
    thumbnail: "/images/city2.jpg",
    rating: 4.2,
  },
  {
    name: "Sunyani",
    thumbnail: "/images/city3.jpg",
    rating: 4.7,
  },
  {
    name: "Tamale",
    thumbnail: "/images/city4.jpg",
    rating: 4.9,
  },
  {
    name: "Takoradi",
    thumbnail: "/images/city5.jpg",
    rating: 4.9,
  },
  {
    name: "Koforidua",
    thumbnail: "/images/city6.jpg",
    rating: 4.9,
  },
];

const Explore = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Explore Cities</h2>
      <p className={styles.description}>
        Discover amazing properties in cities across the country.
      </p>
      <div className={styles.grid}>
        {cities.map((city, index) => (
          <div key={index} className={styles.card}>
            <Image
              src={city.thumbnail}
              alt={city.name}
              width={1000}
              height={70}
              className={styles.thumbnail}
            />
            <div className={styles.rate}>
              <h3 className={styles.cityName}>{city.name}</h3>
              <div className={styles.rating}>
                {Array.from({ length: Math.floor(city.rating) }, (_, i) => (
                  <span key={i} className={styles.star}>
                    &#9733;
                  </span>
                ))}
                {city.rating % 1 !== 0 && (
                  <span className={styles.star}>&#9734;</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
