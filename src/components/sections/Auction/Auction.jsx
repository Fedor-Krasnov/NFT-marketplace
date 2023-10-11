import React from 'react';
import './Auction.scss';

const Auction = () => (
  <section className="auction">
    <div className="auction__container">
      <div className="auction__wrapper">
        <div className="auction__author">
          <div className="auction__avatar">
            <img alt="avatar" src="../../src-old/media/users/user-7.svg" />
          </div>
          <div className="auction__user-name">Shroomie</div>
        </div>
        <div className="auction__content">
          <h2>Magic Mashrooms</h2>
          <a className="button button_secondary" href="">
            <img alt="" src="../../src-old/media/icons/see-all.svg" />
            See NFT
          </a>
          <div className="countdown__container">
            <div className="countdown">
              <h4>Auction ends&nbsp;in:</h4>
              <div className="countdown__content">
                <div>
                  <div className="countdown__value">59</div>
                  <div>Hours</div>
                </div>
                <div>
                  <div className="countdown__value">:</div>
                  <div></div>
                </div>
                <div>
                  <div className="countdown__value">59</div>
                  <div>Minutes</div>
                </div>
                <div>
                  <div className="countdown__value">:</div>
                  <div></div>
                </div>
                <div>
                  <div className="countdown__value">59</div>
                  <div>Seconds</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export { Auction };
