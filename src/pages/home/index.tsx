import { i18n } from '@/services/i18n';
import { TimelineItem, TimelineItemProps } from './components/timeline-item';
import styles from './styles.module.scss';

export const HomePage: React.FC = () => {
  const timelineData: TimelineItemProps[] = [
    {
      period: `${i18n.t('month.sep')} 2018 - ${i18n.t('month.jun')} 2022`,
      title: i18n.t('timeline.degree'),
      organization: i18n.t('timeline.kpi'),
      url: 'https://kpi.ua/',
      description: i18n.t('timeline.kpi-description'),
    },
    {
      period: `${i18n.t('month.nov')} 2019`,
      title: i18n.t('timeline.ideathon'),
      organization: i18n.t('timeline.social-tech'),
      url: 'https://social-tech.io/',
      description: i18n.t('timeline.ideathon-description'),
    },
    {
      period: `${i18n.t('month.jan')} 2021 - ${i18n.t('month.mar')} 2021`,
      title: i18n.t('timeline.binary-studio-winter-academy'),
      organization: i18n.t('timeline.binary-studio-academy'),
      url: 'https://academy.binary-studio.com/',
      description: i18n.t('timeline.binary-studio-academy-description'),
    },
    {
      period: `${i18n.t('month.mar')} 2021 - ${i18n.t('month.nov')} 2022`,
      title: i18n.t('timeline.binary-studio-position'),
      organization: i18n.t('timeline.binary-studio'),
      url: 'https://binary-studio.com/',
      description: i18n.t('timeline.binary-studio-description'),
    },
    {
      period: `${i18n.t('month.may')} 2023 - ${i18n.t('month.mar')} 2024`,
      title: i18n.t('timeline.computools-position'),
      organization: i18n.t('timeline.computools'),
      url: 'https://careers.computools.ua/about-computools/',
      description: i18n.t('timeline.computools-description'),
    },
  ];

  const renderTimelineItem = (item: TimelineItemProps) => <TimelineItem {...item} />;

  return (
    <div className={styles.container}>
      <aside className={styles.general}>
        <h1 className={styles.name}>{i18n.t('name')}</h1>
        <h3 className={styles.position}>{i18n.t('position')}</h3>
        <p className={styles['short-description']}>{i18n.t('short-description')}</p>
      </aside>
      <main className={styles.details}>
        <section className={styles.about}>
          <p>{i18n.t('about.p1')}</p>
          <p>
            {i18n.t('about.p2-1')}
            <span>{i18n.t('about.p2-2')}</span>
            {i18n.t('about.p2-3')}
          </p>
          <p>{i18n.t('about.p3')}</p>
        </section>
        <section className={styles.timeline}>
          <h2>{i18n.t('timeline.title')}</h2>
          {timelineData.map(renderTimelineItem)}
        </section>
      </main>
    </div>
  );
};
