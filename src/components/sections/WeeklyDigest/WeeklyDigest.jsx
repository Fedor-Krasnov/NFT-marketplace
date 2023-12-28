import React from 'react';
import './WeeklyDigest.scss';
import { weeklyDigestData } from '../../../mocks';
import { Subscription } from '../../Subscription';
import { Title } from '../../units';

const WeeklyDigest = () => {
  const { title, description, image } = weeklyDigestData;

  return (
    <section className="weekly-digest">
      <div className="weekly-digest__container">
        <div className="weekly-digest__img">
          <img alt={image.alt} src={image.src} />
        </div>
        <div className="weekly-digest__information">
          <Title description={description} heading="h2" title={title} />
          <Subscription />
        </div>
      </div>
    </section>
  );
};

export { WeeklyDigest };
