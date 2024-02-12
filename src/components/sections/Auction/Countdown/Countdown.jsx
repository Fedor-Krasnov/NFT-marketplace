import React, { useEffect, useState } from 'react';
import './Countdown.scss';
import { auctionData } from '../../../../mocks';
import { Button } from '../../../units';

const countdownClassName = 'countdown';
const oneDayInMs = 24 * 60 * 60 * 1000 - 3 * 60 * 60 * 1000 - 1000;

const Countdown = ({ buttonTitle }) => {
  const { title, countdownContent } = auctionData;
  const [countdown, setCountdown] = useState(oneDayInMs);
  const [isAuctionClosed, setIseAuctionClosed] = useState(false);

  const getReturnValues = () => {
    if (countdown <= 0) {
      setIseAuctionClosed(true);
    }

    const countdownDate = new Date(countdown);
    const seconds = countdownDate.getSeconds().toString().padStart(2, '0');
    const minutes = countdownDate.getMinutes().toString().padStart(2, '0');
    const hours = countdownDate.getHours().toString().padStart(2, '0');

    return { seconds, minutes, hours };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevState) => prevState - 1000);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${countdownClassName}__container`}>
      <div className={countdownClassName}>
        {isAuctionClosed ? (
          <h4
            className={`${countdownClassName}__auction-closed`}
            dangerouslySetInnerHTML={{ __html: 'Auction closed' }}
          />
        ) : (
          <>
            <h4 dangerouslySetInnerHTML={{ __html: title }} />
            <div className={`${countdownClassName}__content`}>
              <div>
                <div className={`${countdownClassName}__value`}>{getReturnValues().hours}</div>
                <div dangerouslySetInnerHTML={{ __html: countdownContent.hours }} />
              </div>
              <div>
                <div className={`${countdownClassName}__value`}>:</div>
                <div></div>
              </div>
              <div>
                <div className={`${countdownClassName}__value`}>{getReturnValues().minutes}</div>
                <div dangerouslySetInnerHTML={{ __html: countdownContent.minutes }} />
              </div>
              <div>
                <div className={`${countdownClassName}__value`}>:</div>
                <div></div>
              </div>
              <div>
                <div className={`${countdownClassName}__value`}>{getReturnValues().seconds}</div>
                <div dangerouslySetInnerHTML={{ __html: countdownContent.seconds }} />
              </div>
            </div>
            {buttonTitle && <Button className={`${countdownClassName}__button`} title="Place Bid" width="fill" />}
          </>
        )}
      </div>
    </div>
  );
};

export { Countdown };
