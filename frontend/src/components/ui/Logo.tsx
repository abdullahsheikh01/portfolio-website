import Image from 'next/image';
import logo from '@/app/icon.png';
import styles from '../styles/ui.module.css';

type LogoProps = {
  href?: string;
  size?: number;
};

// The AS monogram plus wordmark — the brand anchor used in the header and footer
const Logo = ({ href = '#home', size = 40 }: LogoProps) => {
  return (
    <a href={href} className={styles.logo} aria-label="Abdullah Shaikh, back to top">
      <Image src={logo} alt="" width={size} height={size} className={styles.logoMark} />
      <span className={styles.logoText}>
        <span className={styles.logoName}>Abdullah Shaikh</span>
        <span className={styles.logoRole}>agentic ai · frontend</span>
      </span>
    </a>
  );
};

export default Logo;
