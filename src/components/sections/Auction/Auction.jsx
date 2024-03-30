import React from 'react';
import { Link } from 'react-router-dom';
import { auctionData } from '../../../mocks';
import { Button, IconCode } from '../../units';
import auctionStyles from './Auction.module.scss';
import { Countdown } from './Countdown';

const auctionClassName = 'auction';

const Auction = () => {
  const { image, userName, nameNFT } = auctionData;

  return (
    <section className={auctionStyles[auctionClassName]}>
      <div className={auctionStyles[`${auctionClassName}__container`]}>
        <div className={auctionStyles[`${auctionClassName}__wrapper`]}>
          <Link to={`/user-profile/${userName}`}>
            <div className={auctionStyles[`${auctionClassName}__author`]}>
              <div className={auctionStyles[`${auctionClassName}__avatar`]}>
                <img alt={image.alt} src={image.src} />
              </div>
              <div
                className={auctionStyles[`${auctionClassName}__user-name`]}
                dangerouslySetInnerHTML={{ __html: userName }}
              />
            </div>
          </Link>
          <div className={auctionStyles[`${auctionClassName}__content`]}>
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
