'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaPlay } from 'react-icons/fa';
import styles from './styles/Projects.module.css';

type Project = {
  image: string;
  title: string;
  url: string;
  // Optional demo video in /public/videos; when set, the image acts as its thumbnail
  video?: string;
};

const projects: Project[] = [
  {
    image: '/images/projects/blog-website.png',
    title: 'Blog Website',
    url: 'https://blogswebsitebyabdullahshaikh-6601.vercel.app/'
  },
  {
    image: '/images/projects/ecommerce-website.png',
    title: 'E-Commerce Website',
    url: 'https://market-place-builder-hackathon-2025-giaic-6601.vercel.app/'
  },
  {
    image: '/images/projects/npm-projects.png',
    title: 'NPM Projects',
    url: 'https://www.npmjs.com/~abdullahsheikh6601'
  },
  {

    image: '/images/projects/to-do.png',
    title: 'To Do App',
    url: "https://todo-app-6601.vercel.app"
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!activeProject) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveProject(null);
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeProject]);

  const renderCard = (project: Project, key: string) => {
    const card = (
      <div className={styles.projectCard}>
        <div className={styles.projectImageWrapper}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            style={{ objectFit: 'cover' }}
            className={styles.projectImage}
          />
          {project.video && (
            <span className={styles.playOverlay}>
              <FaPlay />
            </span>
          )}
        </div>
        <p className={styles.projectTitle}>{project.title}</p>
      </div>
    );

    if (project.video) {
      return (
        <button
          type="button"
          key={key}
          className={`${styles.projectCardLink} ${styles.cardButton}`}
          onClick={() => setActiveProject(project)}
          aria-label={`Play ${project.title} video`}
        >
          {card}
        </button>
      );
    }

    return (
      <Link href={project.url} key={key} className={styles.projectCardLink} target='_blank'>
        {card}
      </Link>
    );
  };

  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.mainTitle}>My Projects</h2>
      <div className={styles.projectsContainer}>
        <h3 className={styles.subTitle}>Development Projects</h3>
        <div className={styles.projectsSlider}>
          <div className={`${styles.projectsSlide} ${activeProject ? styles.paused : ''}`}>
            {projects.map((project, index) => renderCard(project, `${index}`))}
            {projects.map((project, index) => renderCard(project, `clone-${index}`))}
          </div>
        </div>
      </div>

      {activeProject?.video && (
        <div className={styles.modalBackdrop} onClick={() => setActiveProject(null)}>
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-label={activeProject.title}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.closeButton}
              onClick={() => setActiveProject(null)}
              aria-label="Close video"
            >
              &times;
            </button>
            <video
              className={styles.modalVideo}
              src={activeProject.video}
              poster={activeProject.image}
              controls
              autoPlay
              playsInline
            />
            <div className={styles.modalActions}>
              <p className={styles.modalTitle}>{activeProject.title}</p>
              <Link href={activeProject.url} target='_blank' className={styles.liveButton}>
                Visit Live Site
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
