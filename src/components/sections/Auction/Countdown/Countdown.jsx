import React from 'react';
import './Countdown.scss';
import { auctionData } from '../../../../mocks';

const Countdown = () => {
  const { title, countdownContent } = auctionData;

  return (
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
  );
};

export { Countdown };
