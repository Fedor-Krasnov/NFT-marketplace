import React from 'react';
import './ConnectWalletPage.scss';
import { connectWalletPageData } from '../../../mocks/Page';
import { Title } from '../../units';
import { SelectionOfWalletsPage } from './SelectionOfWalletsPage';

const ConnectWalletPage = () => {
  const { title, description, choice } = connectWalletPageData;

  return (
    <div className="connect-wallet">
      <div className="connect-wallet__img-container">
        <div className="connect-wallet__img"></div>
      </div>
      <div className="connect-wallet__wallet-selection">
        <div className="connect-wallet__title">
          <Title description={description} title={title} />
        </div>
        {choice.map((item) => (
          <SelectionOfWalletsPage key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export { ConnectWalletPage };
