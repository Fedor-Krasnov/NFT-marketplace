import React from 'react';
import './BrowseMarketplace.scss';

const BrowseMarketplace = () => (
  <div className="browse-marketplace">
    <div className="browse-marketplace__title">
      <h1>Browse Marketplace</h1>
      <p>Browse through more than 50k NFTs on&nbsp;the NFT Marketplace.</p>
    </div>
    <div className="browse-marketplace__search-string">
      <label>
        <input className="search" placeholder="Search your favourite NFTs" type="text" />
      </label>
      <div className="browse-marketplace__search-img">
        <a href="">
          <img alt="" className="magnifying-glass" src="../src-old/media/icons/magnifyingglass.svg" />
        </a>
      </div>
    </div>
    <div className="browse-marketplace__choice-point">
      <div className="browse-marketplace__trait"></div>
      <div className="browse-marketplace__buttons">
        <a href="">
          NFTs<span>302</span>
        </a>
        <a href="">
          Collections<span>67</span>
        </a>
      </div>
    </div>
  </div>
);

export { BrowseMarketplace };
