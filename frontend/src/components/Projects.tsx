'use client';
import { useState } from 'react';
import { projects, type Project } from '@/data/site';
import SectionHeading from './ui/SectionHeading';
import ProjectCard from './ProjectCard';
import VideoModal from './VideoModal';
import styles from './styles/Projects.module.css';

const featuredProjects = projects.filter((project) => project.is_featured_project);
const secondaryProjects = projects.filter((project) => !project.is_featured_project);

const Projects = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="site-container">
        <SectionHeading
          id="projects-title"
          index="01"
          eyebrow="Selected work"
          title="Featured AI projects"
          description="Agents that do real work, and the interfaces that make them usable. Each one ships with source or a live demo."
        />

        <div className={styles.featuredGrid}>
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              variant="featured"
              onPlay={setActiveProject}
            />
          ))}
        </div>

        {secondaryProjects.length > 0 && (
          <div className={styles.more}>
            <h3 className={styles.moreTitle}>More projects</h3>
            <div className={styles.compactGrid}>
              {secondaryProjects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} variant="compact" />
              ))}
            </div>
          </div>
        )}
      </div>

      <VideoModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
};

export default Projects;
