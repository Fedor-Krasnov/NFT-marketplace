import React from 'react';
import { weeklyDigestData } from '../../../mocks';
import { Subscription } from '../../Subscription';
import { Title } from '../../units';
import weeklyDigestStyles from './WeeklyDigest.module.scss';

const weeklyDigestClassName = 'weekly-digest';

const WeeklyDigest = () => {
  const { title, description, image } = weeklyDigestData;

  return (
    <section className={weeklyDigestStyles[weeklyDigestClassName]}>
      <div className={weeklyDigestStyles[`${weeklyDigestClassName}__container`]}>
        <div className={weeklyDigestStyles[`${weeklyDigestClassName}__img`]}>
          <img alt={image.alt} src={image.src} />
        </div>
        <div className={weeklyDigestStyles[`${weeklyDigestClassName}__information`]}>
          <Title description={description} heading="h2" title={title} />
          <Subscription />
        </div>
      </div>
    </section>
  );
};

export { WeeklyDigest };
