// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./Projects.module.css";
import { getImageUrl } from "../../utils";
import projects from "../../data/projects.json";
const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.Projects}>
        {projects.map((project, id) => {
          return (
            <div key={id} className={styles.descriptionContainer}>
              <img
                className={styles.projectImage}
                src={getImageUrl(project.ImageSrc)}
                alt={`Image Of ${project.ProjectName}`}
              />
              <h3 className={styles.projectTitle}>{project.ProjectName}</h3>
              <p className={styles.projectDesc}>{project.description}</p>
              <ul className={styles.projectSkills}>
                {project.skills.map((skill, id) => {
                  return (<li key={id} className={styles.projectSkill}>
                    {skill}
                  </li>);
                })}
              </ul>
              <div className={styles.Links}>
                <a href={project.source} className={styles.Link}>
                  Source
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
