import React from 'react';
import './ConnectWalletPage.scss';
import { connectWalletPageData } from '../../../mocks/Page/index.js';

const ConnectWalletPage = () => {
  const {} = connectWalletPageData;

  return (
    <div className="connect-wallet">
      <div>
        <div className="connect-wallet__img"></div>
      </div>
      <div className="connect-wallet__wallet-selection">
        <h2>Connect wallet</h2>
        <p>Choose a&nbsp;wallet you want to&nbsp;connect. There are several wallet providers.</p>
        <div className="wallet-selection__container">
          <div className="choice">
            <div className="choice__img">
              <img alt="" src="../src-old/media/pages/icon/metamask.png" />
            </div>
            <p>Metamask</p>
          </div>
          <div className="choice">
            <div className="choice__img">
              <img alt="" src="../src-old/media/pages/icon/wallet-connect.png" />
            </div>
            <p>Wallet Connect</p>
          </div>
          <div className="choice">
            <div className="choice__img">
              <img alt="" src="../src-old/media/pages/icon/coinbase.png" />
            </div>
            <p>Coinbase</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ConnectWalletPage };
