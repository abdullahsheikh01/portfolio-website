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
  // Featured projects show in the "Featured AI Projects" group, the rest in "Secondary Projects"
  is_featured_project: boolean;
  // Optional demo video in /public/videos; when set, the image acts as its thumbnail
  video?: string;
};

const projects: Project[] = [
  {
    image: '/images/projects/personal-ai-employee.webp',
    title: 'Personal AI Employee (Digital FTE)',
    url: 'https://github.com/abdullahsheikh01/personal-ai-employee-digital-fte',
    is_featured_project: true,
    video: '/videos/personal-ai-employee.mp4'
  },
  {
    image: '/images/projects/docker-watchdog.webp',
    title: 'OpenCode Docker Watchdog',
    url: 'https://github.com/abdullahsheikh01/opencode-docker-watchdog',
    is_featured_project: true,
    video: '/videos/docker-watchdog.mp4'
  },
  {
    image: '/images/projects/panaversity-exam-practice.webp',
    title: 'Panaversity Exam Practice',
    url: 'https://panaversity-exam-practice.vercel.app/',
    is_featured_project: true,
    video: '/videos/panaversity-exam-practice.mp4'
  },
  {
    image: '/images/projects/teacher-notes.webp',
    title: 'Teacher Notes – Lesson Planner',
    url: 'https://teacher-notes-app.vercel.app/',
    is_featured_project: true,
    video: '/videos/teacher-notes.mp4'
  },
  {
    image: '/images/projects/blog-website.png',
    title: 'Blog Website',
    url: 'https://blogswebsitebyabdullahshaikh-6601.vercel.app/',
    is_featured_project: false
  },
  {
    image: '/images/projects/ecommerce-website.png',
    title: 'E-Commerce Website',
    url: 'https://market-place-builder-hackathon-2025-giaic-6601.vercel.app/',
    is_featured_project: false
  },
  {
    image: '/images/projects/npm-projects.png',
    title: 'NPM Projects',
    url: 'https://www.npmjs.com/~abdullahsheikh6601',
    is_featured_project: false
  },
  {

    image: '/images/projects/to-do.png',
    title: 'To Do App',
    url: "https://todo-app-6601.vercel.app",
    is_featured_project: false
  },
];

const featuredProjects = projects.filter((project) => project.is_featured_project);
const secondaryProjects = projects.filter((project) => !project.is_featured_project);

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
            sizes="(max-width: 480px) 200px, (max-width: 768px) 250px, 300px"
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

  const renderGroup = (title: string, group: Project[]) => {
    if (group.length === 0) return null;
    return (
      <div className={styles.projectsContainer}>
        <h3 className={styles.subTitle}>{title}</h3>
        <div className={styles.projectsSlider}>
          <div className={`${styles.projectsSlide} ${activeProject ? styles.paused : ''}`}>
            {group.map((project, index) => renderCard(project, `${index}`))}
            {group.map((project, index) => renderCard(project, `clone-${index}`))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.mainTitle}>My Projects</h2>
      {renderGroup('⭐ Featured AI Projects', featuredProjects)}
      {renderGroup('Secondary Projects', secondaryProjects)}

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
                {activeProject.url.includes('github.com') ? 'View on GitHub' : 'Visit Live Site'}
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
