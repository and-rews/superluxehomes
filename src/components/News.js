import React from "react";
import styles from "../css/News.module.css";
import Image from "next/image";
import Link from "next/link";

const newsArticles = [
  {
    id: 1,
    title: "Professional and ",
    description:
      "Stay ahead of the curve with our expert analysis on the latest housing market trends for ...",
    image: "/images/news1.jpg",
    date: "2023-05-01",
  },
  {
    id: 2,
    title: "Green Homes on the Rise",
    description:
      "Discover the growing trend of sustainable and eco-friendly homes, and how you can embrace...",
    image: "/images/news2.jpeg",
    date: "2023-04-15",
  },
  {
    id: 3,
    title: "Explore the Luxury Property Market",
    description:
      "Get an inside look at the world of luxury properties and what makes them stand out.",
    image: "/images/news3.jpg",
    date: "2023-03-20",
  },
];

const News = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>SuperLuxe Homes</h2>
      <p className={styles.description}>
        Your One-Stop Shop for Real Estate: Buy, rent, or invest with
        confidence. We are here to guide you.
      </p>
    </div>
  );
};

export default News;
