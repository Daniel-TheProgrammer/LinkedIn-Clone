import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>
        <img
          src="https://github.com/alexandredev3.png"
          alt="Avatar"
          className="profile-picture"
        />
        <h1>Alexandre Costa</h1>
        <h2>Software Engineer</h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Quem viu seu perfil</span>
          <span className="value">88</span>
        </div>
        <div className="key-value">
          <span className="key">Viram sua publicação</span>
          <span className="value">232</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
