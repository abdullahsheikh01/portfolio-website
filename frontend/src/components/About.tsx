'use client';
import styles from './styles/About.module.css';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact,FaGitAlt, FaFigma} from 'react-icons/fa';
import { SiTailwindcss} from 'react-icons/si';

const skills = [
  { icon: <FaHtml5 />, name: 'HTML' },
  { icon: <FaCss3Alt />, name: 'CSS' },
  { icon: <FaJsSquare />, name: 'JavaScript' },
  { icon: <FaReact/>, name: 'Next.js' },
  { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
  { icon: <FaGitAlt />, name: 'Git' },
  { icon: <FaFigma />, name: 'Figma' },
];

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutContent}>
        <h2 className={styles.aboutTitle}>About Me</h2>
        <p className={styles.aboutText}>
         I'm Abdullah Shaikh, a passionate Agentic AI and Frontend Web Developer based in Karachi. With
  a strong foundation in Python and the OpenAI Agents SDK, I specialize in creating intelligent,
  next-generation web applications. Currently advancing my skills in Cloud Applied Agentic AI
  Engineering through the Governor Sindh Initiative, I am dedicated to building innovative digital
  solutions that seamlessly blend cutting-edge technology with user-centric design. My goal is to 
  develop impactful applications that not only meet today’s demands but also shape the future of  
  the web.
        </p>
      </div>

      <div className={styles.additionalInfo}>
        <div className={styles.infoBox}>
          <h3 className={styles.infoTitle}>Education</h3>
          <ul className={styles.infoList}>
            <li>Cloud Applied Agentic AI Engineering(continuing) from <a href="https://www.governorsindh.com/" target='_blank' className={styles.link}>Governor Sindh Initiative for GenAI, Web3, and Metaverse</a></li>
            <li>Matriculation from <a href="https://www.smiu.edu.pk/School" target='_blank' className={styles.link}>SMIU Model School</a></li>
          </ul>
        </div>
        <div className={styles.infoBox}>
          <h3 className={styles.infoTitle}>Skills Learnt!</h3>
          <ul className={styles.infoList}>
            <li>Front-End Web Development with headless CMS</li>
            <li>Python Developer</li>
            <li>Agentic AI Engineering with OpenAI Agents SDK</li>
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
