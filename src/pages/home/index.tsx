import { i18n } from '@/services/i18n';
import { TimelineItem } from './components/timeline-item';
import styles from './styles.module.scss';

export const HomePage: React.FC = () => (
  <div className={styles.container}>
    <aside className={styles.general}>
      <h1 className={styles.name}>{i18n.t('name')}</h1>
      <h3 className={styles.position}>{i18n.t('position')}</h3>
      <p className={styles['short-description']}>{i18n.t('short-description')}</p>
    </aside>
    <div className={styles.details}>
      <section className={styles.about}>
        <p>{i18n.t('about-1')}</p>
        <p>
          {i18n.t('about-2.1')}
          <span>{i18n.t('about-2.2')}</span>
          {i18n.t('about-2.3')}
        </p>
        <p>{i18n.t('about-3')}</p>
      </section>
      <section className={styles.timeline}>
        <h2>{i18n.t('timeline')}</h2>
        <TimelineItem
          period='Jan 2013 - Dec 2020'
          title='Title'
          organization='Computools'
          description='Lorem ipsum dolor sit amet tuda suda'
        />
        <TimelineItem
          period='Jan 2013 - Dec 2020'
          title='Title'
          organization='Computools'
          description='Lorem ipsum dolor sit amet tuda suda'
        />
        <TimelineItem
          period='Jan 2013 - Dec 2020'
          title='Title'
          organization='Computools'
          description='Lorem ipsum dolor sit amet tuda suda'
        />
        <TimelineItem
          period='Jan 2013 - Dec 2020'
          title='Title'
          organization='Computools'
          description='Lorem ipsum dolor sit amet tuda suda'
        />
      </section>
    </div>
  </div>
);
