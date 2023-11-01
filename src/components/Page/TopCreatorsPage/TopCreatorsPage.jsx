import React from 'react';
import './TopCreatorsPage.scss';
import { topCreatorsPageData } from '../../../mocks/Page/index.js';

const TopCreatorsPage = () => {
  const {} = topCreatorsPageData;

  return (
    <div className="top-creators">
      <div className="top-creators__title-page">
        <h1>Top Creators</h1>
        <p>Check out top ranking NFT artists on&nbsp;the NFT Marketplace.</p>
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
      <div className="top-creators__list">
        <div className="top-creators__list-header">
          <p className="top-creators__example-1">#</p>
          <p className="top-creators__example-2">Artist</p>
          <p className="top-creators__example-3">Change</p>
          <p className="top-creators__example-4">NFTs Sold</p>
          <p className="top-creators__example-5">Volume</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export { TopCreatorsPage };
