import styles from '../styles/ui.module.css';

type TagListProps = {
  tags: string[];
  label?: string;
};

export const TagList = ({ tags, label = 'Technologies' }: TagListProps) => {
  return (
    <ul className={styles.tagList} aria-label={label}>
      {tags.map((tag) => (
        <li key={tag} className={styles.tag}>
          {tag}
        </li>
      ))}
    </ul>
  );
};
