import { Link } from '@/pages/home/components/link';
import styles from './styles.module.scss';

export interface TimelineItemProps {
  period: string;
  title: string;
  organization: string;
  url: string;
  description: string;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  period,
  title,
  organization,
  url,
  description,
}) => (
  <div className={styles.container}>
    <div className={styles.header}>
      <div className={styles.pin} />
      <p className={styles.period}>{period}</p>
    </div>
    <div className={styles.content}>
      <h3>{title}</h3>
      <Link title={organization} url={url} />
      <p>{description}</p>
    </div>
  </div>
);
