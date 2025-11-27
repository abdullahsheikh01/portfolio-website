'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles/Projects.module.css';

const projects = [
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
  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.mainTitle}>My Projects</h2>
      <div className={styles.projectsContainer}>
        <h3 className={styles.subTitle}>Development Projects</h3>
        <div className={styles.projectsSlider}>
          <div className={styles.projectsSlide}>
            {projects.map((project, index) => (
              <Link href={project.url} key={index} className={styles.projectCardLink} target='_blank'>
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
              <Link href={project.url} key={`clone-${index}`} className={styles.projectCardLink} target='_blank'>
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
