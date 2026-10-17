import Image from 'next/image';
import {FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import styles from './styles/Hero.module.css';

type DeveloperInfoType= {
  name: string,
  image:{
    src:string,
    alt:string,
  }
  heroparagraph:string,
  sociallinks:{
    x:string,
    linkedin:string,
    github:string
  }
}

const developerInfo: DeveloperInfoType = {
  name: "Abdullah Shaikh",
  image: {
    src:"/images/developer.png",
    alt:"Abdullah Shaikh"
  },
  heroparagraph:"From a single line of code to a fully-realized digital and agentic ai experience, I thrive on the journey of\
  creation. As a dedicated Frontend and Agentic AI Developer, I specialize in building intuitive and dynamic user\
  interfaces and intelligent systems that can not only look great but also solve real-world problems. Dive into my work and\
  let's explore how we can bring your vision to life.",
  sociallinks:{
    x:"https://x.com/abdullahsh6601",
    linkedin:"https://www.linkedin.com/in/abdullah-shaikh-29699b302/",
    github: "https://github.com/abdullahsheikh01"
  }
}
 

const Hero = () => {
  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.heroImageContainer}>
        <Image
          src={developerInfo.image.src}
          alt={developerInfo.image.alt}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 150px, (max-width: 1250px) 40vw, 500px"
          priority
        />
      </div>
  
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{developerInfo.name}</h1>
        <p className={styles.heroDescription}>
          {developerInfo.heroparagraph}
        </p>
        <a href="https://www.linkedin.com/in/abdullah-shaikh-29699b302/" target='_blank'><button className={styles.hireMeButton}>Hire Me</button></a>
        <div className={styles.socialIcons}>
          <a href={developerInfo.sociallinks.x} className={styles.socialIcon} target='_blank'><FontAwesomeIcon icon={faXTwitter} height={25}/></a>
          <a href={developerInfo.sociallinks.linkedin} className={styles.socialIcon} target='_blank'><FaLinkedinIn /></a>
          <a href={developerInfo.sociallinks.github}  className={styles.socialIcon} target='_blank'><FaGithub/></a>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
