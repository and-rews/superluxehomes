import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaUserCircle, FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
import styles from "../css/Header.module.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src="/images/superluxe_logo.png"
          alt="SuperLuxe Logo"
          width={150}
          height={40}
        />
      </Link>

      {/* Menu Icon for Mobile */}
      <div className={styles.menuIcon} onClick={toggleMenu}>
        {showMenu ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Menu */}
      <nav
        className={`${styles.nav} ${showMenu ? styles.showMenu : ""} ${
          showMenu ? styles.navShown : ""
        }`}
      >
        <ul className={styles.navitems}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/buy">Buy</Link>
          </li>
          <li>
            <Link href="/rent">Rent</Link>
          </li>
          <li>
            <Link href="/properties">All Properties</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
          {showMenu && (
            <li
              className={styles.icon2}
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "0.7rem",
                display: "none",
              }}
            >
              <button className={styles.button}>Sign In</button>
              <FaUserCircle className={styles.icon} />
            </li>
          )}
        </ul>
      </nav>

      <div
        style={{ display: "flex", alignItems: "center" }}
        className={styles.phone}
      >
        <FaPhoneAlt className={styles.icon} style={{ marginRight: "0.5rem" }} />
        <div style={{ marginRight: "1rem" }}>+233 50 163 5621</div>
      </div>
      <div className={`${styles.icons} ${showMenu ? styles.hideIcons : ""}`}>
        Sign In
        <FaUserCircle className={styles.icon} />
      </div>
    </header>
  );
};

export default Header;
