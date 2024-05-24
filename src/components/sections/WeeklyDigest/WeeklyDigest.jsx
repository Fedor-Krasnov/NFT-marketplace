import React from 'react';
import { Subscription } from '../../Subscription';
import { Title } from '../../units';
import weeklyDigestStyles from './WeeklyDigest.module.scss';

const weeklyDigestClassName = 'weekly-digest';

const WeeklyDigest = ({ content }) => {
  const { title, description, image } = content;

  return (
    <div className={weeklyDigestStyles[weeklyDigestClassName]}>
      <div className={weeklyDigestStyles[`${weeklyDigestClassName}__container`]}>
        <div className={weeklyDigestStyles[`${weeklyDigestClassName}__img`]}>
          <img alt={image.alt} src={image.src} />
        </div>
        <div className={weeklyDigestStyles[`${weeklyDigestClassName}__information`]}>
          <Title description={description} heading="h2" title={title} />
          <Subscription />
        </div>
      </div>
    </div>
  );
};

export { WeeklyDigest };
