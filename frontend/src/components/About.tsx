'use client';
import React from 'react';
import styles from './styles/About.module.css';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaGitAlt, FaFigma} from 'react-icons/fa';
import { SiTailwindcss, SiAdobeillustrator, SiAdobephotoshop, SiAdobexd } from 'react-icons/si';

const skills = [
  { icon: <FaHtml5 />, name: 'HTML' },
  { icon: <FaCss3Alt />, name: 'CSS' },
  { icon: <FaJsSquare />, name: 'JavaScript' },
  { icon: <FaReact />, name: 'React' },
  { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
  { icon: <FaBootstrap />, name: 'Bootstrap' },
  { icon: <FaGitAlt />, name: 'Git' },
  { icon: <FaFigma />, name: 'Figma' },
  { icon: <SiAdobexd />, name: 'Adobe XD' },
  { icon: <SiAdobeillustrator />, name: 'Illustrator' },
  { icon: <SiAdobephotoshop />, name: 'Photoshop' },
];

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutContent}>
        <h2 className={styles.aboutTitle}>About Me</h2>
        <p className={styles.aboutText}>
          I'm Mokete Elias Tjantabane, a passionate Frontend Developer & UI/UX Designer with expertise in React, JavaScript, and Tailwind CSS, dedicated to building responsive and user-friendly applications. With a Diploma in Information Technology from Central University of Technology, Free State, I have experience in Web Development, UI/UX Design, and IT Support. Having worked as an IT Officer at Softstart BTI (Botshabelo Digital Hub), where I mentored interns and assisted startups, I enjoy transforming ideas into digital experiences, whether through intuitive UI designs in Figma or developing scalable web applications. Currently, I'm expanding my knowledge in React Native and working on projects that merge creativity with functionality to solve real-world problems.
        </p>
      </div>

      <div className={styles.additionalInfo}>
        <div className={styles.infoBox}>
          <h3 className={styles.infoTitle}>Education</h3>
          <ul className={styles.infoList}>
            <li>Diploma in Information Technology</li>
            <li>National Senior Certificate (Grade 12/Matric)</li>
          </ul>
        </div>
        <div className={styles.infoBox}>
          <h3 className={styles.infoTitle}>Certifications & Courses</h3>
          <ul className={styles.infoList}>
            <li>Front-End Web Development Program (ALX Africa)</li>
            <li>National Senior Certificate (freeCodeCamp)</li>
            <li>Web Programming Foundations (LinkedIn)</li>
            <li>HTML Essential Training (LinkedIn)</li>
            <li>JavaScript Essentials (Cisco)</li>
            <li>Professional Foundations (ALX Africa)</li>
          </ul>
        </div>
      </div>

      <div className={styles.skillsSection}>
        <h3 className={styles.skillsTitle}>Skills & Technologies</h3>
        <div className={styles.skillsSlider}>
          <div className={styles.skillsSlide}>
            {skills.map((skill, index) => (
              <div className={styles.skillItem} key={index}>
                <div className={styles.skillIcon}>{skill.icon}</div>
                <p className={styles.skillName}>{skill.name}</p>
              </div>
            ))}
            {skills.map((skill, index) => (
              <div className={styles.skillItem} key={`clone-${index}`}>
                <div className={styles.skillIcon}>{skill.icon}</div>
                <p className={styles.skillName}>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
