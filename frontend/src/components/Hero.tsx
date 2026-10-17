import Image from 'next/image';
import { LuArrowRight, LuMapPin } from 'react-icons/lu';
import { developer } from '@/data/site';
import Button from './ui/Button';
import SocialLinks from './ui/SocialLinks';
import styles from './styles/Hero.module.css';

const Hero = () => {
  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.backdrop} aria-hidden="true" />

      <div className={`site-container ${styles.inner}`}>
        <div className={styles.content}>
          <p className={styles.kicker}>
            <span className={styles.kickerDot} aria-hidden="true" />
            {developer.role}
          </p>

          <h1 id="hero-title" className={styles.title}>
            I build interfaces people enjoy — and the <span className={styles.highlight}>AI agents</span> behind them.
          </h1>

          <p className={styles.intro}>
            I&apos;m {developer.name}, a developer who designs responsive web experiences with Next.js and TypeScript,
            and builds autonomous, human-in-the-loop agents with Python, the OpenAI Agents SDK, and Claude Code.
          </p>

          <div className={styles.actions}>
            <Button href="#projects" icon={<LuArrowRight />}>
              View projects
            </Button>
            <Button href="#contact" variant="secondary">
              Get in touch
            </Button>
          </div>

          <div className={styles.meta}>
            <SocialLinks />
            <p className={styles.location}>
              <LuMapPin aria-hidden="true" />
              {developer.location}
            </p>
          </div>
        </div>

        <div className={styles.visual}>
          <span className={`${styles.stroke} ${styles.strokeA}`} aria-hidden="true" />
          <span className={`${styles.stroke} ${styles.strokeS}`} aria-hidden="true" />
          <figure className={styles.portraitCard}>
            <div className={styles.portrait}>
              <Image
                src={developer.image.src}
                alt={developer.image.alt}
                fill
                preload
                sizes="(max-width: 860px) 320px, 420px"
                className={styles.portraitImage}
              />
            </div>
            <figcaption className={styles.caption}>
              <span className={styles.captionName}>{developer.name}</span>
              <span className={styles.captionRole}>~/karachi · building agents</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
