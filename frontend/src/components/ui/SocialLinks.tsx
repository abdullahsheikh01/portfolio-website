import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { socialLinks, type SocialLink } from '@/data/site';
import styles from '../styles/ui.module.css';

const icons: Record<SocialLink['label'], React.ReactNode> = {
  GitHub: <FaGithub />,
  LinkedIn: <FaLinkedinIn />,
  X: <FaXTwitter />,
};

const SocialLinks = ({ className }: { className?: string }) => {
  return (
    <ul className={`${styles.socialList} ${className ?? ''}`}>
      {socialLinks.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label={`${link.label} profile (opens in a new tab)`}
          >
            <span aria-hidden="true">{icons[link.label]}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
