import React from 'react';
import './ConnectWalletPage.scss';
import { connectWalletPageData } from '../../../mocks/Page';
import { Title } from '../../units';
import { SelectionOfWalletsPage } from './SelectionOfWalletsPage';

const connectWalletPageClassName = 'connect-wallet';

const ConnectWalletPage = () => {
  const { title, description, choice } = connectWalletPageData;

  return (
    <div className={connectWalletPageClassName}>
      <div className={`${connectWalletPageClassName}__img-container`}>
        <div className={`${connectWalletPageClassName}__img`}></div>
      </div>
      <div className={`${connectWalletPageClassName}__wallet-selection`}>
        <div className={`${connectWalletPageClassName}__title`}>
          <Title description={description} heading="h1" title={title} />
        </div>
        {choice.map((item) => (
          <SelectionOfWalletsPage key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export { ConnectWalletPage };
