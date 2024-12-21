import { BackgroundContainer } from '@/components/background-container';
import { HomePage } from '@/pages/home';
import '@/styles/reset.scss';
import '@/styles/main.scss';

export const App: React.FC = () => (
  <BackgroundContainer>
    <HomePage />
  </BackgroundContainer>
);
