import React from 'react';
import './Auction.scss';
import { Link } from 'react-router-dom';
import { auctionData } from '../../../mocks';
import { Button, IconCode } from '../../units';
import { Countdown } from './Countdown';

const auctionClassName = 'auction';

const Auction = () => {
  const { image, userName, nameNFT } = auctionData;

  return (
    <section className={auctionClassName}>
      <div className={`${auctionClassName}__container`}>
        <div className={`${auctionClassName}__wrapper`}>
          <Link to={`/user-profile/${userName}`}>
            <div className={`${auctionClassName}__author`}>
              <div className={`${auctionClassName}__avatar`}>
                <img alt={image.alt} src={image.src} />
              </div>
              <div className={`${auctionClassName}__user-name`} dangerouslySetInnerHTML={{ __html: userName }} />
            </div>
          </Link>
          <div className={`${auctionClassName}__content`}>
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
