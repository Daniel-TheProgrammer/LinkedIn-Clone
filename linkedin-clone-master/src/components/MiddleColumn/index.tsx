import React from 'react';

import LoadingFeedShare from '../Shimmer/LoadingFeedShare';
import LoadingFeedPost from '../Shimmer/LoadingFeedPost';

import FeedShare from './FeedShare';
import FeedPost from './FeedPost';

import { Container } from './styles';

const MiddleColumn: React.FC<LoadingProps> = ({ isLoading }) => {
  if (isLoading) {
    return (
      <Container className="middle-column">
        <LoadingFeedShare />
        <LoadingFeedPost />
        <LoadingFeedPost />
        <LoadingFeedPost />
        <LoadingFeedPost />
      </Container>
    );
  }

  return (
    <Container className="middle-column">
      <FeedShare />
      <FeedPost 
        postImage="https://media-exp1.licdn.com/dms/image/C4D22AQFvTvMSbvEpKg/feedshare-shrink_800-alternative/0?e=1606953600&v=beta&t=WaA56MPOIeUUB-J2e_90nMz2RdwOt2IBAxOs4O_9TSY"
        likesCount={2}
      />
      <FeedPost 
        postImage="https://github.com/alexandredev3/twitch-clone/raw/master/.github/interface.png"
        likesCount={48}
      />
      <FeedPost 
        postImage="https://github.com/alexandredev3/linkedin-clone/raw/master/.github/assets/linkedin_clone_app.png"
        likesCount={52}
      />
    </Container>
  );
};

export default MiddleColumn;
