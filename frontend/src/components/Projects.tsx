'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles/Projects.module.css';

const projects = [
  {
    image: '/images/movie-web-app.png',
    title: 'Movie Web App',
    url: '#'
  },
  {
    image: '/images/weather-web-app.png',
    title: 'Weather Web App',
    url: '#'
  },
  {
    image: '/images/softstartbti.png',
    title: 'Softstart BTI',
    url: '#'
  },
];

const Projects = () => {
  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.mainTitle}>My Projects</h2>
      <div className={styles.projectsContainer}>
        <h3 className={styles.subTitle}>Development Projects</h3>
        <div className={styles.projectsSlider}>
          <div className={styles.projectsSlide}>
            {projects.map((project, index) => (
              <Link href={project.url} key={index} className={styles.projectCardLink}>
                <div className={styles.projectCard}>
                  <div className={styles.projectImageWrapper}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className={styles.projectImage}
                    />
                  </div>
                  <p className={styles.projectTitle}>{project.title}</p>
                </div>
              </Link>
            ))}
            {projects.map((project, index) => (
              <Link href={project.url} key={`clone-${index}`} className={styles.projectCardLink}>
                <div className={styles.projectCard}>
                  <div className={styles.projectImageWrapper}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className={styles.projectImage}
                    />
                  </div>
                  <p className={styles.projectTitle}>{project.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
