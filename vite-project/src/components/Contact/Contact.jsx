import React from 'react'

import { getImageUrl } from '../../utils'
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} 
                alt="Email Icon" />
                <a href="mailto:apoorvasunkad1999@gmail.com">apoorvasunkad1999@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} 
                alt="Linkedin Icon" />
                <a href="https://www.linkedin.com/in/apoorvasunkad15/" target="_blank">linkedin.com/in/apoorvasunkad15/</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} 
                alt="Github Icon" />
                <a href="https://github.com/ApoorvaSunkad" target="_blank">github.com/ApoorvaSunkad</a>
            </li>
        </ul>
    </footer>
  );
};

