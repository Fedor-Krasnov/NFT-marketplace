import React from 'react';
import './Auction.scss';
import { auctionData } from '../../../mocks/index.js';
import { Button, IconCode } from '../../units/index.js';

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
            <Button icon={IconCode.eye} secondary title={auctionData.buttonTitle} />
            <div className="countdown__container">
              <div className="countdown">
                <h4 dangerouslySetInnerHTML={{ __html: title }} />
                <div className="countdown__content">
                  <div>
                    <div className="countdown__value">59</div>
                    <div dangerouslySetInnerHTML={{ __html: countdownContent.hours }} />
                  </div>
                  <div>
                    <div className="countdown__value">:</div>
                    <div></div>
                  </div>
                  <div>
                    <div className="countdown__value">59</div>
                    <div dangerouslySetInnerHTML={{ __html: countdownContent.minutes }} />
                  </div>
                  <div>
                    <div className="countdown__value">:</div>
                    <div></div>
                  </div>
                  <div>
                    <div className="countdown__value">59</div>
                    <div dangerouslySetInnerHTML={{ __html: countdownContent.seconds }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Auction };
