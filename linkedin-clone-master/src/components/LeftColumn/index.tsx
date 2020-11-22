import React from 'react';

import LoadingProfilePanel from '../Shimmer/LoadingProfilePanel';

import ProfilePanel from './ProfilePanel';
import HashtagPanel from './HashtagPanel';

import { Container } from './styles';

const LeftColumn: React.FC<LoadingProps> = ({ isLoading }) => {
  if (isLoading) {
    return (
      <Container className="left-column">
        <LoadingProfilePanel />
      </Container>
    );
  }

  return (
    <Container className="left-column">
      <ProfilePanel />
      <HashtagPanel />
    </Container>
  );
};

export default LeftColumn;
