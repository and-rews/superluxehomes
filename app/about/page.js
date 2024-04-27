"use client";

import Header from "../../src/components/Header";
import Hero from "../../src/components/Hero";
import Explore from "../../src/components/Explore";
import Latest from "../../src/components/Latest";
import PropertyTypes from "../../src/components/PropertyTypes";
import News from "../../src/components/News";
import Contact from "../../src/components/Contact";
import Services from "../../src/components/Services";
import Footer from "../../src/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Explore />
      <Latest />
      <PropertyTypes />
      <News />
      <Contact />
      <Services />
      <Footer />
    </main>
  );
}
