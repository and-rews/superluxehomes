// app/components/Contact.jsx
import React, { useState } from "react";
import styles from "../css/Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Reset form data
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <div className={styles.writeup}>
            <h2 className={styles.title}>Get in Touch</h2>
            <p className={styles.description}>
              Have a question or need assistance? Our friendly team is here to
              help. Feel free to reach out, and we will get back to you as soon
              as possible.
            </p>
            <div className={styles.contactInfo}>
              <div className={styles.infoItem}>
                <h3 className={styles.infoTitle}>Address</h3>
                <p className={styles.infoText}>Adum, Kumasi</p>
              </div>
              <div className={styles.infoItem}>
                <h3 className={styles.infoTitle}>Phone</h3>
                <p className={styles.infoText}>(+233) 54 193 2820</p>
              </div>
              <div className={styles.infoItem}>
                <h3 className={styles.infoTitle}>Email</h3>
                <p className={styles.infoText}>info@superluxehomes.com</p>
              </div>
            </div>
          </div>
          <div className={styles.form}>
            <h2 className={styles.formTitle}>Contact Form</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.formInput}
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.formInput}
                />
              </div>
              <div className={styles.formGroup}>
                <textarea
                  placeholder="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.formTextarea}
                ></textarea>
              </div>
              <button type="submit" className={styles.formButton}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
