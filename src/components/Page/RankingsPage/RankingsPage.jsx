import React from 'react';
import { rankingsPageData } from '../../../mocks/Page';
import { RankingsSection } from '../../sections';
import { Title } from '../../units';
import { TitleSize } from '../../units/Title/types';
import topCreatorsPageStyles from './RankingsPage.module.scss';

const topCreatorsPageClassName = 'top-creators';

const RankingsPage = () => {
  const { title, description } = rankingsPageData;

  return (
    <>
      <div className={topCreatorsPageStyles[topCreatorsPageClassName]}>
        <div className={topCreatorsPageStyles[`${topCreatorsPageClassName}__title-page`]}>
          <Title description={description} heading={TitleSize.h1} title={title} />
        </div>
        <div className={topCreatorsPageStyles[`${topCreatorsPageClassName}__control-panel-desktop`]}>
          <a href="">
            <p>Today</p>
          </a>
          <a href="">
            <p>This Week</p>
          </a>
          <a href="">
            <p>This Month</p>
          </a>
          <a href="">
            <p>All Time</p>
          </a>
        </div>
        <div className={topCreatorsPageStyles[`${topCreatorsPageClassName}__control-panel-adaptive`]}>
          <a href="">
            <p>1d</p>
          </a>
          <a href="">
            <p>7d</p>
          </a>
          <a href="">
            <p>30d</p>
          </a>
          <a href="">
            <p>All Time</p>
          </a>
        </div>
        <RankingsSection />
      </div>
    </>
  );
};

export { RankingsPage };
