import React from 'react';
import './WeeklyDigest.scss';
import { weeklyDigestData } from '../../../mocks';
import { Subscription } from '../../Subscription';
import { Title } from '../../units';

const weeklyDigestClassName = 'weekly-digest';

const WeeklyDigest = () => {
  const { title, description, image } = weeklyDigestData;

  return (
    <section className={weeklyDigestClassName}>
      <div className={`${weeklyDigestClassName}__container`}>
        <div className={`${weeklyDigestClassName}__img`}>
          <img alt={image.alt} src={image.src} />
        </div>
        <div className={`${weeklyDigestClassName}__information`}>
          <Title description={description} heading="h2" title={title} />
          <Subscription />
        </div>
      </div>
    </section>
  );
};

export { WeeklyDigest };
