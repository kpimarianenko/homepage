import styles from './styles.module.scss';

export interface TagProps {
  title: string;
}

export const Tag: React.FC<TagProps> = ({ title }) => <span className={styles.tag}>{title}</span>;
