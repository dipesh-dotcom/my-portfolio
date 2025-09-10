"use client";

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TechStack from "./components/TechStack";
import Work from "./components/Work";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <TechStack />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
