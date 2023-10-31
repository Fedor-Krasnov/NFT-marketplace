import React from 'react';
import './ConnectWalletPage.scss';
import { connectWalletPageData } from '../../../mocks/Page/index.js';
import { SelectionOfWallets } from './SelectionOfWallets/index.js';

const ConnectWalletPage = () => {
  const { title, description, choice } = connectWalletPageData;

  return (
    <div className="connect-wallet">
      <div>
        <div className="connect-wallet__img"></div>
      </div>
      <div className="connect-wallet__wallet-selection">
        <h2 dangerouslySetInnerHTML={{ __html: title }} />
        <p dangerouslySetInnerHTML={{ __html: description }} />
        {choice.map((item) => (
          <SelectionOfWallets key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export { ConnectWalletPage };
