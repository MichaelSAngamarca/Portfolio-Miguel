// eslint-disable-next-line no-unused-vars
import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";
const Contact = () => {
  return (
    <footer id = "contact" className = {styles.container}>
      <div className = {styles.text}>
        <h2>Contact Me</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className= {styles.links}>
        <li className= {styles.link}>
            <img src = {getImageUrl("contact/emailIcon.png")} alt="Email Icon"></img>
            <a href= "mailto:michaelangamarca558@gmail.com"> michaelangamarca558@gmail.com</a>
        </li>

        <li className= {styles.link}>
            <img src = {getImageUrl("contact/githubIcon.png")} alt="Github Icon"></img>
            <a href= "https://github.com/MichaelSAngamarca">github.com/MichaelSAngamarca</a>
        </li>

        <li className= {styles.link}>
            <img src = {getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn Icon"></img>
            <a href= "https://www.linkedin.com/in/michael-angamarca-9721bb272/">linkedin.com/MichaelAngamarca</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
