import React from 'react';
import './TopCreatorsPage.scss';
import { topCreatorsPageData } from '../../../mocks/Page';
import { TopCreatorsSection } from '../../sections';
import { Title } from '../../units';

const TopCreatorsPage = () => {
  const { title, description } = topCreatorsPageData;

  return (
    <div className="top-creators">
      <div className="top-creators__title-page">
        <Title description={description} title={title} />
      </div>
      <div className="top-creators__control-panel-desktop">
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
      <div className="top-creators__control-panel-adaptive">
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
      <TopCreatorsSection />
    </div>
  );
};

export { TopCreatorsPage };
