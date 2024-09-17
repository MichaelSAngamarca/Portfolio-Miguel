import { useState } from "react";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Avatar from "./components/Avatar/Avatar";
import About from "./components/About/About";
import Expierence from "./components/Expierence/Expierence";
function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Avatar />
      <About />
      <Expierence />
    </div>
  );
}

export default App;
