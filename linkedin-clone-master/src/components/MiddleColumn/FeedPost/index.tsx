import React from 'react';

import Panel from '../../Panel';

import {
  Container,
  Row,
  PostImage,
  Separator,
  Avatar,
  Column,
  LikeIcon,
  CommentIcon,
  ShareIcon,
  SendIcon,
} from './styles';

interface PostProps {
  postImage: string;
  likesCount: number;
}

const FeedPost: React.FC<PostProps> = ({ postImage, likesCount }) => {
  return (
    <Panel>
      <Container>
        <Row className="heading">
          <Avatar src="https://github.com/alexandredev3.png" alt="Rocketseat" />
          <Column>
            <h3>Alexandre</h3>
            <h4>Software Enginner</h4>
            <time>1 sem</time>
          </Column>
        </Row>

        <PostImage
          src={postImage}
          alt="Alexandre dev"
        />

        <Row className="likes">
          <span className="circle blue" />
          <span className="circle green" />
          <span className="circle red" />
          <span className="number">{likesCount}</span>
        </Row>

        <Row>
          <Separator />
        </Row>

        <Row className="actions">
          <button>
            <LikeIcon />
            <span>Gostei</span>
          </button>
          <button>
            <CommentIcon />
            <span>Comentar</span>
          </button>
          <button>
            <ShareIcon />
            <span>Compartilhar</span>
          </button>
          <button>
            <SendIcon />
            <span>Enviar</span>
          </button>
        </Row>
      </Container>
    </Panel>
  );
};

export default FeedPost;
