"use client";

import Header from "../src/components/Header";
import Hero from "../src/components/Hero";
import Explore from "../src/components/Explore";
import Latest from "../src/components/Latest";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Explore />
      <Latest />
    </main>
  );
}
