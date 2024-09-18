/* eslint-disable no-unused-vars */
import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Avatar.module.css"
const Avatar = () => {
  return (
    <section className = {styles.container}>
      <div className={styles.content}>
        <h1 className= {styles.title}>Hi My Name Is Michael!</h1>
        <p className = {styles.description}>I am a Software Developer with expierence in varius technologies</p>
        <a className= {styles.contactBtn} href = "mailto:michaelangamaeca558@gmail.com">Contact Me!</a>
      </div>
      <img className = {styles.AvatarImg} src = {getImageUrl("hero/MichaelAvatar.png")}></img>
      <div className = {styles.topBlur} />
      <div className = {styles.bottomBlur} />
    </section>
  );
};

export default Avatar;
