import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";
const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImg}
          src={getImageUrl("about/MichaelASittingDown-removebg-preview.png")}
          alt="me sitting with laptop"
        ></img>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/cursorIcon.png")}
              alt="cursor icon"
            ></img>
            <div className={styles.aboutItemText}>
              <h3>Software Developer</h3>
              <p>
                I am a Software Developer with expierence in building responsive
                and optimized programs in a variety of programming languages
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/serverIcon.png")}
              alt="cursor icon"
            ></img>
            <div className={styles.aboutItemText}>
              <h3>Backend Engineer</h3>
              <p>
                I have expierence in designing and devloping programs with fast
                and optimized Backends
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="ui icon"></img>
            <div className={styles.aboutItemText}>
              <h3>Data Analyst</h3>
              <p>With a certification of Data Analytics from Google</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
