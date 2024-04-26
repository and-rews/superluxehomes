// app/components/News.jsx
import React from "react";
import styles from "../css/News.module.css";
import Image from "next/image";
import Link from "next/link";

const newsArticles = [
  {
    id: 1,
    title: "Housing Market Trends for 2023",
    description:
      "Stay ahead of the curve with our expert analysis on the latest housing market trends for 2023.",
    image: "/images/news1.jpg",
    date: "2023-05-01",
  },
  {
    id: 2,
    title: "Green Homes on the Rise",
    description:
      "Discover the growing trend of sustainable and eco-friendly homes, and how you can embrace a greener lifestyle.",
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
      <h2 className={styles.title}>Latest News</h2>
      <p className={styles.description}>
        Stay up-to-date with the latest real estate news, trends, and insights.
      </p>
      <div className={styles.newsGrid}>
        {newsArticles.map((article) => (
          <div key={article.id} className={styles.newsCard}>
            <div className={styles.imageContainer}>
              <Image
                src={article.image}
                alt={article.title}
                width={400}
                height={300}
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <h3 className={styles.newsTitle}>{article.title}</h3>
              <p className={styles.newsDescription}>{article.description}</p>
              <p className={styles.newsDate}>
                {new Date(article.date).toLocaleDateString()}
              </p>
              <Link
                href={`/news/${article.id}`}
                className={styles.readMoreButton}
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
