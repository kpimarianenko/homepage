import { i18n } from '@/services/i18n';

export const HomePage: React.FC = () => (
  <div>
    <h1>{i18n.t('name')}</h1>
  </div>
);
