import React from 'react';
import './Auction.scss';
import { auctionData } from '../../../mocks/index.js';
import { Button, IconCode } from '../../units/index.js';
import { Countdown } from './Countdown/index.js';

const Auction = () => {
  const { image, userName, nameNFT, title, countdownContent } = auctionData;

  return (
    <section className="auction">
      <div className="auction__container">
        <div className="auction__wrapper">
          <div className="auction__author">
            <div className="auction__avatar">
              <img alt={image.alt} src={image.src} />
            </div>
            <div className="auction__user-name" dangerouslySetInnerHTML={{ __html: userName }} />
          </div>
          <div className="auction__content">
            <h2 dangerouslySetInnerHTML={{ __html: nameNFT }} />
            <Button button icon={IconCode.eye} secondary title={auctionData.buttonTitle} to={auctionData.buttonLink} />
            <Countdown />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Auction };
