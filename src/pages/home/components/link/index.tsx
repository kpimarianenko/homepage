import { LinkIcon } from '@/assets/icons/link';
import { cn } from '@/helpers/styles';
import styles from './styles.module.scss';

interface LinkProps {
  title: string;
  url?: string;
  className?: string;
}

export const Link: React.FC<LinkProps> = ({ title, url, className }) => (
  <a href={url} target='_blank' className={cn(styles.link, className)}>
    <LinkIcon className={styles.icon} />
    {title}
  </a>
);
