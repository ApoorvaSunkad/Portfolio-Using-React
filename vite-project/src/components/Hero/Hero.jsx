import React from 'react'
import { getImageUrl } from "../../utils.js";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1  className={styles.title}>Hi, I'm Apoorva Sunkad</h1>
            <p  className={styles.description}>I am an aspiring software engineer. Reach out if you would like to learn more!</p>
            <a href="mailto:apoorvasunkad1999@gmail.com" 
            className={styles.contactBtn} target="_blank">Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.webp")} 
        alt="Hero Image" className={styles.heroImg}/>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  );
};

