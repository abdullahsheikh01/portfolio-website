import { LuArrowUp } from 'react-icons/lu';
import { developer, navLinks } from '@/data/site';
import Logo from './ui/Logo';
import SocialLinks from './ui/SocialLinks';
import styles from './styles/Footer.module.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`site-container ${styles.inner}`}>
        <div className={styles.brand}>
          <Logo />
          <p className={styles.tagline}>Building web interfaces and the AI agents behind them, from Karachi.</p>
        </div>

        <nav aria-label="Footer">
          <ul className={styles.links}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.link}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <SocialLinks />
      </div>

      <div className={`site-container ${styles.bottom}`}>
        <p>
          © {year} {developer.name}. All rights reserved.
        </p>
        <a href="#home" className={styles.top}>
          Back to top
          <LuArrowUp aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
