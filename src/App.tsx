import React from "react";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App(): JSX.Element {
  return (
    <React.Fragment>
      <Hero />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}
