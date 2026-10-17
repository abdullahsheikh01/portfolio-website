import { LuArrowUpRight, LuGraduationCap } from 'react-icons/lu';
import { education } from '@/data/site';
import SectionHeading from './ui/SectionHeading';
import styles from './styles/About.module.css';

const About = () => {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="site-container">
        <SectionHeading id="about-title" index="03" eyebrow="About" title="Frontend craft, agentic thinking." />

        <div className={styles.layout}>
          <div className={`${styles.story} reveal`}>
            <p className={styles.lead}>
              I&apos;m Abdullah Shaikh, an Agentic AI and Frontend Web Developer based in Karachi.
            </p>
            <p>
              On the frontend I work with Next.js, TypeScript, and Tailwind CSS, often backed by a headless CMS like
              Sanity. On the AI side I build with Python and the OpenAI Agents SDK, and increasingly with coding agents
              such as Claude Code and OpenCode — wiring them into watchers, loops, and MCP servers so they can take
              on real, repetitive work.
            </p>
            <p>
              What I care about most is keeping a human in the loop: agents that handle the routine and leave the final
              decision to a person, behind interfaces that are clear enough to trust. The goal is simple — software that
              looks good and solves real problems.
            </p>
          </div>

          <aside className={`${styles.education} reveal`} aria-labelledby="education-title">
            <h3 id="education-title" className={styles.educationTitle}>
              <LuGraduationCap aria-hidden="true" />
              Education
            </h3>
            <ol className={styles.timeline}>
              {education.map((item) => (
                <li key={item.title} className={styles.timelineItem}>
                  <p className={styles.status}>{item.status}</p>
                  <p className={styles.course}>{item.title}</p>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className={styles.institution}>
                    {item.institution}
                    <LuArrowUpRight aria-hidden="true" />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;
