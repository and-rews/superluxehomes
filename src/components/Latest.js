// app/components/Latest.jsx
import React from "react";
import styles from "../css/Latest.module.css";
import Image from "next/image";
import { FaBed, FaBath, FaBalcony, FaParking } from "react-icons/fa";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const properties = [
  {
    image: "/images/property1.jpg",
    name: "Luxury Penthouse",
    features: [
      { icon: FaBed, text: "3 Bedrooms" },
      { icon: FaBath, text: "2 Bathrooms" },
    ],
    location: "New York, USA",
    price: "₵2,500,000",
    forSale: true,
  },
  {
    image: "/images/property2.jpg",
    name: "Modern Apartment",
    features: [
      { icon: FaBed, text: "2 Bedrooms" },
      { icon: FaBath, text: "1 Bathroom" },
    ],
    location: "Los Angeles, USA",
    price: "₵1,200,000",
    forSale: false,
  },
  {
    image: "/images/property3.jpg",
    name: "Modern Apartment",
    features: [
      { icon: FaBed, text: "2 Bedrooms" },
      { icon: FaBath, text: "1 Bathroom" },
    ],
    location: "Los Angeles, USA",
    price: "₵1,200,000",
    forSale: false,
  },
  {
    image: "/images/property4.jpg",
    name: "Modern Apartment",
    features: [
      { icon: FaBed, text: "2 Bedrooms" },
      { icon: FaBath, text: "1 Bathroom" },
    ],
    location: "Los Angeles, USA",
    price: "₵1,200,000",
    forSale: false,
  },
  {
    image: "/images/property4.jpg",
    name: "Modern Apartment",
    features: [
      { icon: FaBed, text: "2 Bedrooms" },
      { icon: FaBath, text: "1 Bathroom" },
    ],
    location: "Los Angeles, USA",
    price: "₵1,200,000",
    forSale: false,
  },
];

const Latest = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Our Latest Properties</h2>
      <p className={styles.description}>
        Discover amazing properties in cities across the country.
      </p>
      <Swiper
        breakpoints={{
          768: {
            slidesPerView: 4,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={1}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwipper"
      >
        {properties.map((property, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <div className={styles.card}>
              <div className={styles.imageContainer}>
                <Image
                  src={property.image}
                  alt={property.name}
                  width={400}
                  height={300}
                  className={styles.image}
                />
                <button className={styles.favoriteButton}>
                  <span className={styles.favoriteIcon}>&#10084;</span>
                </button>
              </div>
              <div className={styles.content}>
                <h3 className={styles.propertyName}>{property.name}</h3>
                <ul className={styles.propertyFeatures}>
                  {property.features.map((feature, index) => (
                    <li key={index} className={styles.feature}>
                      {feature.icon && (
                        <feature.icon className={styles.featureIcon} />
                      )}
                      {feature.text}
                    </li>
                  ))}
                </ul>
                <div className={styles.propertyDetails}>
                  <span className={styles.location}>{property.location}</span>
                  <span className={styles.price}>{property.price}</span>
                </div>
                <div className={styles.propertyStatus}>
                  {property.forSale ? (
                    <span className={styles.forSale}>For Sale</span>
                  ) : (
                    <span className={styles.forRent}>For Rent</span>
                  )}
                </div>
                <Link
                  href={`/property/${property.id}`}
                  className={styles.viewDetailsButton}
                >
                  View Details
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Latest;
