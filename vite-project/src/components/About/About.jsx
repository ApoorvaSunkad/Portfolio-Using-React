import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <p className={styles.description}>I'm a dedicated individual with love for coding and a thirst for exploring new technologies. I am always keen to learn something new and implement it in real life.<br></br><br />

        Apart from this, I am a big space enthusiast. The mysteries of the cosmos have always captivated my imagination, and I dream of combining my technical expertise with a passion for space exploration. <br />I find joy in expanding my knowledge of the universe. I love to travel, paint, and to sky gaze in my free time.</p>
        <div className={styles.content}>

            <img src={getImageUrl("about/aboutImage.webp")} 
            alt="Me sitting with laptop" className={styles.aboutImage}/>

            <ul className={styles.aboutItems}>
                <h2 className={styles.titles}>Education</h2>
                <li className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>
                        <div className={styles.aboutInner}>
                            <h3>Bachelor Of Engineering in Electronics and Communication
                            at KLS Vishwanathrao Deshpande Institute of Technology</h3>
                        </div>
                        <div className={styles.aboutInner}>
                            <p> 2017-2021 | CGPA:7.99</p>
                        </div>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>
                        <div className={styles.aboutInner}>
                            <h3>Intermediate, Science at Presentation Girls' Composite PU College</h3>
                        </div>
                        <div className={styles.aboutInner}> 
                            <p>2017 | 84.02%</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  );
};
