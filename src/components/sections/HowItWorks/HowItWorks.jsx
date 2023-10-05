import React from 'react';
import './HowItWorks.scss';
import { howItWorksData } from '../../../mocks';
import { Title } from '../../units/index.js';

const HowItWorks = () => (
  <section className="how-it-works">
    <Title description={howItWorksData.description} heading="h2" title={howItWorksData.title} />
    <div className="how-it-works__container">
      <div className="explanatory-card">
        <img alt="" src="../src-old/media/nft-cards/how-it-works/explanatory-card-1.png" />
        <div>
          <h3>Setup Your wallet</h3>
          <p>
            Set up&nbsp;your wallet of&nbsp;choice. Connect it&nbsp;to&nbsp;the Animarket by&nbsp;clicking the wallet
            icon in&nbsp;the top right corner.
          </p>
        </div>
      </div>
      <div className="explanatory-card">
        <img alt="" src="../src-old/media/nft-cards/how-it-works/explanatory-card-2.png" />
        <div>
          <h3>Create Collection</h3>
          <p>Upload your work and setup your collection. Add a&nbsp;description, social links and floor price.</p>
        </div>
      </div>
      <div className="explanatory-card">
        <img alt="" src="../src-old/media/nft-cards/how-it-works/explanatory-card-3.png" />
        <div>
          <h3>Start Earning</h3>
          <p>
            Choose between auctions and fixed-price listings. Start earning by&nbsp;selling your NFTs or&nbsp;trading
            others.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export { HowItWorks };
