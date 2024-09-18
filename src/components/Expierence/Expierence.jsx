/* eslint-disable no-unused-vars */
import React from "react";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";
import history from "../../data/history.json";
import styles from "./Expierence.module.css";
const Expierence = () => {
  return (
    <section className = {styles.container} id="expierence">
      <h2 className= {styles.title}>Expierence</h2>
      <div className={styles.content}>
        <div className = {styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className = {styles.skill}>
                <div className = {styles.skillImageContainer}>
                  <img
                    src={getImageUrl(skill.ImageSrc)}
                    alt={skill.title}
                  ></img>
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className = {styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className= {styles.historyItem}>
                <div className= {styles.historyItemDetails}>
                  <h3>{`${historyItem.Role}, ${historyItem.Organization}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experience.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Expierence;
