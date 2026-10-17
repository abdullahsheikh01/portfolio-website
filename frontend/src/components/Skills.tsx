import { LuBot, LuPanelsTopLeft, LuWrench } from 'react-icons/lu';
import { skillGroups } from '@/data/site';
import SectionHeading from './ui/SectionHeading';
import styles from './styles/Skills.module.css';

const groupIcons: Record<string, React.ReactNode> = {
  frontend: <LuPanelsTopLeft />,
  'agentic-ai': <LuBot />,
  tools: <LuWrench />,
};

const Skills = () => {
  return (
    <section id="skills" className={`section ${styles.skills}`} aria-labelledby="skills-title">
      <div className="site-container">
        <SectionHeading
          id="skills-title"
          index="02"
          eyebrow="Toolkit"
          title="Skills & technologies"
          description="What I reach for when building interfaces, agents, and the pipeline between them."
        />

        <div className={styles.grid}>
          {skillGroups.map((group) => (
            <article key={group.id} className={`${styles.group} reveal`} aria-labelledby={`skills-${group.id}`}>
              <div className={styles.groupHeader}>
                <span className={styles.icon} aria-hidden="true">
                  {groupIcons[group.id]}
                </span>
                <h3 id={`skills-${group.id}`} className={styles.groupTitle}>
                  {group.title}
                </h3>
              </div>
              <p className={styles.summary}>{group.summary}</p>
              <ul className={styles.list}>
                {group.skills.map((skill) => (
                  <li key={skill} className={styles.skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
