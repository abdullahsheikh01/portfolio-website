import type { ReactNode } from 'react';
import styles from '../styles/ui.module.css';

type SectionHeadingProps = {
  id: string;
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
};

const SectionHeading = ({ id, index, eyebrow, title, description }: SectionHeadingProps) => {
  return (
    <div className={`${styles.sectionHeading} reveal`}>
      <p className={styles.eyebrow}>
        <span className={styles.eyebrowIndex}>{index}</span>
        <span className={styles.eyebrowBar} aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 id={id} className={styles.sectionTitle}>
        {title}
      </h2>
      {description && <p className={styles.sectionDescription}>{description}</p>}
    </div>
  );
};

export default SectionHeading;
