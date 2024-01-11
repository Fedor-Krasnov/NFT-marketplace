import React from 'react';
import './Countdown.scss';
import { auctionData } from '../../../../mocks';

const countdownClassName = 'countdown';

const Countdown = () => {
  const { title, countdownContent } = auctionData;

  return (
    <div className={`${countdownClassName}__container`}>
      <div className={countdownClassName}>
        <h4 dangerouslySetInnerHTML={{ __html: title }} />
        <div className={`${countdownClassName}__content`}>
          <div>
            <div className={`${countdownClassName}__value`}>59</div>
            <div dangerouslySetInnerHTML={{ __html: countdownContent.hours }} />
          </div>
          <div>
            <div className={`${countdownClassName}__value`}>:</div>
            <div></div>
          </div>
          <div>
            <div className={`${countdownClassName}__value`}>59</div>
            <div dangerouslySetInnerHTML={{ __html: countdownContent.minutes }} />
          </div>
          <div>
            <div className={`${countdownClassName}__value`}>:</div>
            <div></div>
          </div>
          <div>
            <div className={`${countdownClassName}__value`}>59</div>
            <div dangerouslySetInnerHTML={{ __html: countdownContent.seconds }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Countdown };
