import React from 'react';

import { BackgroundContainer } from '@/uikit/background-container';
import '@/styles/reset.scss';
import '@/styles/main.scss';

export const App: React.FC = () => (
  <BackgroundContainer>
    <p>Hello World</p>
  </BackgroundContainer>
);
