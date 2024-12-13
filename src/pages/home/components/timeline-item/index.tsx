import { Link } from '@/uikit/link';
import styles from './styles.module.scss';

interface TimelineItemProps {
  period: string;
  title: string;
  organization: string;
  description: string;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  period,
  title,
  organization,
  description,
}) => (
  <div className={styles.container}>
    <div className={styles.header}>
      <div className={styles.pin} />
      <p className={styles.period}>{period}</p>
    </div>
    <div className={styles.content}>
      <h3>{title}</h3>
      <Link title={organization} url='google.com' />
      <p>{description}</p>
    </div>
  </div>
);
