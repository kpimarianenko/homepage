import { useCallback, useEffect, useRef, useState } from 'react';

import EasterEggAudio from '@/assets/audio/easter-egg.mp3';
import { DocumentIcon } from '@/assets/icons/document';
import { EnvelopeIcon } from '@/assets/icons/envelope';
import { GitHubIcon } from '@/assets/icons/github';
import { LinkedInIcon } from '@/assets/icons/linkedin';
import EasterEggImage from '@/assets/images/easter-egg.png';
import { cn } from '@/helpers/styles';
import { i18n } from '@/services/i18n';
import { LanguageDropdown } from './components/language-dropdown';
import { SocialsLink } from './components/socials-link';
import { Tag } from './components/tag';
import { TimelineItem, TimelineItemProps } from './components/timeline-item';
import styles from './styles.module.scss';

export const HomePage: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [isEasterEggEnabled, setIsEasterEggEnabled] = useState(false);

  const enableEasterEgg = useCallback(() => {
    setIsEasterEggEnabled(true);

    if (audioRef.current) {
      audioRef.current.volume = 0.03;
      audioRef.current.play();
    }
  }, []);

  const disableEasterEgg = useCallback(() => {
    setIsEasterEggEnabled(false);

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, []);

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

  const coreSkills = [
    'JavaScript',
    'TypeScript',
    'React',
    'React Native',
    'HTML',
    'CSS/SCSS',
    'Redux',
    'Redux Toolkit',
    'GraphQL/Apollo',
    'Git',
  ];

  const secondarySkills = [
    'Vite',
    'NextJS',
    'MobX',
    'NodeJS',
    'Express',
    'MongoDB/mongoose',
    'SQL',
    'Sequelize',
    'Jest',
    'Docker',
  ];

  const renderTimelineItem = (item: TimelineItemProps) => (
    <TimelineItem key={item.organization} {...item} />
  );

  const renderTag = (item: string) => <Tag key={item} title={item} />;

  useEffect(() => {
    audioRef.current?.click();
  }, []);

  return (
    <div className={styles.container}>
      <aside className={styles.general}>
        <h1 className={styles.name}>{i18n.t('name')}</h1>
        <h3 className={styles.position}>{i18n.t('position')}</h3>
        <p className={styles['short-description']}>{i18n.t('short-description')}</p>
        <div className={styles.links}>
          <LanguageDropdown
            languages={i18n.languages}
            selectedLanguage={i18n.currentLanguage}
            onLanguageChange={i18n.changeLanguage}
          />
          <SocialsLink
            title={i18n.t('socials.mail')}
            url='mailto:kpimarianenko@gmail.com'
            Icon={EnvelopeIcon}
          />
          <SocialsLink title={i18n.t('socials.cv')} url='/homepage/cv.pdf' Icon={DocumentIcon} />
          <SocialsLink
            title={i18n.t('socials.linkedin')}
            url='https://www.linkedin.com/in/roman-marianenko-72446325a/'
            Icon={LinkedInIcon}
          />
          <SocialsLink
            title={i18n.t('socials.github')}
            url='https://github.com/kpimarianenko'
            Icon={GitHubIcon}
          />
        </div>
      </aside>
      <main className={styles.details}>
        <section className={styles.about}>
          <p>{i18n.t('about.p1')}</p>
          <p>
            {i18n.t('about.p2-1')}
            <span onClick={enableEasterEgg} onMouseLeave={disableEasterEgg}>
              {i18n.t('about.p2-2')}
            </span>
            {i18n.t('about.p2-3')}
          </p>
          <p>{i18n.t('about.p3')}</p>
        </section>
        <section className={styles.timeline}>
          <h2>{i18n.t('timeline.title')}</h2>
          {timelineData.map(renderTimelineItem)}
        </section>
        <section className={styles['tech-stack']}>
          <h2>{i18n.t('tech-stack.title')}</h2>
          <h4>{i18n.t('tech-stack.core-skills')}</h4>
          <div className={styles['tag-list']}>{coreSkills.map(renderTag)}</div>
          <h4>{i18n.t('tech-stack.secondary-skills')}</h4>
          <div className={styles['tag-list']}>{secondarySkills.map(renderTag)}</div>
        </section>
      </main>
      <div className={cn(styles['easter-egg'], isEasterEggEnabled && styles['visible'])}>
        <audio ref={audioRef} src={EasterEggAudio} playsInline={true} webkit-playsinline='true' />
        <img src={EasterEggImage} className={styles['eg-image']} />
        <p>{i18n.t('easter-egg')}</p>
      </div>
    </div>
  );
};
