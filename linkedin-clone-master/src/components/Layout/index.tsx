import React, { useState, useEffect } from 'react';

import MobileHeader from '../MobileHeader';
import DesktopHeader from '../DesktopHeader';
import LeftColumn from '../LeftColumn';
import RightColumn from '../RightColumn';
import MiddleColumn from '../MiddleColumn';

import { Container } from './styles';

const Layout: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000)
  }, [isLoading]);

  return (
    <Container>
      <MobileHeader />
      <DesktopHeader />

      <span></span>

      <main>
        <LeftColumn isLoading={isLoading} />
        <MiddleColumn isLoading={isLoading} />
        <RightColumn isLoading={isLoading} />
      </main>
    </Container>
  );
};

export default Layout;
