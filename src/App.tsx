import { HomePage } from '@/pages/home';
import { BackgroundContainer } from '@/uikit/background-container';
import '@/styles/reset.scss';
import '@/styles/main.scss';

export const App: React.FC = () => (
  <BackgroundContainer>
    <HomePage />
  </BackgroundContainer>
);
