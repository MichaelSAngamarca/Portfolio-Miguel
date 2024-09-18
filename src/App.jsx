import { useState } from "react";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Avatar from "./components/Avatar/Avatar";
import About from "./components/About/About";
import Expierence from "./components/Expierence/Expierence";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Avatar />
      <About />
      <Expierence />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
