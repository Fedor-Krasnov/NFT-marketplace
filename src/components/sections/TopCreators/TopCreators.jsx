import React from 'react';
import './TopCreators.scss';
import { IconCode, Title } from '../../units';
import { UserCreators } from './UserCreators';

const TopCreators = () => (
  <section className="top-creators">
    <Title
      buttonIcon={IconCode.rocket}
      buttonTitle="View Rankings"
      description="Checkout Top Rated Creators on the NFT Marketplace"
      heading="h2"
      title="Top creators"
    />
    <UserCreators />
  </section>
);

export { TopCreators };
