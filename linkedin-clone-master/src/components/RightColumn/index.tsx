import React from 'react';

import LoadingTrendingPanel from '../Shimmer/LoadingTrendingPanel'

import TrendingPanel from './TrendingPanel';

import { Container } from './styles';

const RightColumn: React.FC<LoadingProps> = ({ isLoading }) => {
  if (isLoading) {
    return (
      <Container className="right-column">
        <LoadingTrendingPanel />
      </Container>
    );
  }


  return (
    <Container className="right-column">
      <TrendingPanel />
      <TrendingPanel />
    </Container>
  );
};

export default RightColumn;
