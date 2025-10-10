"use client";

import { Hero } from "./components/Hero";
import { Section } from "./Section";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Section blog title="news" />
      <Section blog title="events" />
    </main>
  );
}

// this is basically homepage
