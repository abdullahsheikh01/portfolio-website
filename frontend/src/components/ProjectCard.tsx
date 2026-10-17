import Image from 'next/image';
import { LuArrowUpRight, LuPlay } from 'react-icons/lu';
import { FaGithub } from 'react-icons/fa6';
import type { Project } from '@/data/site';
import { TagList } from './ui/Tag';
import Button from './ui/Button';
import styles from './styles/Projects.module.css';

type ProjectCardProps = {
  project: Project;
  index: number;
  variant: 'featured' | 'compact';
  onPlay?: (project: Project) => void;
};

const ProjectCard = ({ project, index, variant, onPlay }: ProjectCardProps) => {
  const featured = variant === 'featured';
  const number = String(index + 1).padStart(2, '0');

  return (
    <article className={`${styles.card} ${featured ? styles.featured : styles.compact} reveal`}>
      <div className={styles.media}>
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes={featured ? '(max-width: 860px) 100vw, 620px' : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px'}
          className={styles.image}
        />
        {project.video && onPlay && (
          <button
            type="button"
            className={styles.playButton}
            onClick={() => onPlay(project)}
            aria-label={`Watch ${project.title} demo video`}
          >
            <LuPlay aria-hidden="true" />
          </button>
        )}
      </div>

      <div className={styles.body}>
        {featured && <p className={styles.cardIndex}>{number}</p>}
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDescription}>{project.description}</p>
        <TagList tags={project.tags} label={`${project.title} technologies`} />

        <div className={styles.cardActions}>
          {project.video && onPlay && featured && (
            <Button variant="secondary" size="sm" icon={<LuPlay />} onClick={() => onPlay(project)}>
              Watch demo
            </Button>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className={styles.textLink}>
              Live site
              <LuArrowUpRight aria-hidden="true" className={styles.arrow} />
              <span className="sr-only"> for {project.title} (opens in a new tab)</span>
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.textLink}>
              <FaGithub aria-hidden="true" />
              Source
              <span className="sr-only"> code for {project.title} on GitHub (opens in a new tab)</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
