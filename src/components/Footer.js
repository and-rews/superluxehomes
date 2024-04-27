// app/components/Footer.jsx
import React from "react";
import styles from "../css/Footer.module.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>About Us</h3>
            <p className={styles.sectionText}>
              We are a leading real estate company dedicated to helping you find
              your dream property. With years of experience and a team of
              knowledgeable professionals, we strive to provide exceptional
              service and support throughout your real estate journey.
            </p>
          </div>
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Quick Links</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/explore">Explore</Link>
              </li>
              <li>
                <Link href="/latest">Latest Properties</Link>
              </li>
              <li>
                <Link href="/news">News</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Follow Us</h3>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.socialIcon}>
                <FaFacebook />
              </a>
              <a href="#" className={styles.socialIcon}>
                <FaTwitter />
              </a>
              <a href="#" className={styles.socialIcon}>
                <FaInstagram />
              </a>
              <a href="#" className={styles.socialIcon}>
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className={styles.bottomBar}>
        <p>
          &copy; {new Date().getFullYear()} Your Company Name. All rights
          reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
