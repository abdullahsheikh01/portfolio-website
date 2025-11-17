import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import styles from './styles/Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroImageContainer}>
        <Image
          src="/images/developer.png" // Assuming the image is in public/images
          alt="Mr. Developer"
          layout="fill"
          objectFit="cover"
        />
      </div>
  
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>MR. DEVELOPER</h1>
        <p className={styles.heroDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar eget eros vel ultricies. Curabitur aliquam lacinia enim, quis maximus diam malesuada ac. Sed maximus orci malesuada,
        </p>
        <button className={styles.hireMeButton}>Hire Me</button>
        <div className={styles.socialIcons}>
          <a href="#" className={styles.socialIcon}><FaFacebookF /></a>
          <a href="#" className={styles.socialIcon}><FaTwitter /></a>
          <a href="#" className={styles.socialIcon}><FaInstagram /></a>
          <a href="#" className={styles.socialIcon}><FaLinkedinIn /></a>
          <a href="#" className={styles.socialIcon}><FaGithub /></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
