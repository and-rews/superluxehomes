"use client";

import { useState } from "react";
import styles from "../css/Hero.module.css";

const propertyTypes = ["Apartment", "House", "Condo", "Townhouse"];
const locations = ["New York", "Los Angeles", "Chicago", "San Francisco"];

const Hero = () => {
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearch = () => {
    // Perform search logic here
    console.log("Property Type:", propertyType);
    console.log("Location:", location);
    console.log("Search Keyword:", searchKeyword);
  };

  return (
    <div className={styles.hero}>
      <div className="">
        <h1 className={styles.subheading}>GREAT TO BE HOME!</h1>
        <p className={styles.heading}>Find Your Dream Property</p>
        <form className={styles.form}>
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className={`${styles.input} ${styles.selectInput}`}
            style={{
              borderBottomLeftRadius: "25px",
              borderRight: "1px solid #f4f4f4",
            }}
          >
            <option value="">Property Type</option>
            {propertyTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className={`${styles.input} ${styles.selectInput}`}
            style={{
              borderRight: "1px solid #f4f4f4",
            }}
          >
            <option value="">Location</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Search Keyword"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            className={`${styles.input} ${styles.selectInput2}`}
            style={{ borderRight: "1px solid #f4f4f4" }}
          />
          <button onClick={handleSearch} className={styles.btn}>
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
