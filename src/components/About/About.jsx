// eslint-disable-next-line no-unused-vars
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
                Developer with experience in designing and building
                responsive user interfaces and high-performance back-end
                systems. Proficient in Java, Python and well versed in JavaScript, React, and
                Django, with an understanding of database management
                and API integration.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="ui icon"></img>
            <div className={styles.aboutItemText}>
              <h3>Data Analyst</h3>
              <p>
                With a certification of Data Analytics from Google, I have
                demonstrated my proficiency in leveraging data analytics tools
                and techniques to extract valuable insights and make
                data-informed decisions.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
