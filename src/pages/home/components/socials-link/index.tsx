import { IconComponent } from '@/types/icons';
import styles from './styles.module.scss';

interface SocialsLinkProps {
  title: string;
  url: string;
  Icon: IconComponent;
}

export const SocialsLink: React.FC<SocialsLinkProps> = ({ title, url, Icon }) => (
  <a className={styles.container} target='_blank' href={url}>
    <Icon className={styles.icon} />
    <p>{title}</p>
  </a>
);
