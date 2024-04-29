import React from 'react';
import { Helmet } from 'react-helmet';
import { connectWalletPageData } from '../../../mocks/Page';
import { Title } from '../../units';
import connectWalletPageStyles from './ConnectWalletPage.module.scss';
import { SelectionOfWalletsPage } from './SelectionOfWalletsPage';

const connectWalletPageClassName = 'connect-wallet';

const ConnectWalletPage = () => {
  const { title, description, choice } = connectWalletPageData;

  return (
    <>
      <Helmet>
        <title>Connect Wallet – NFT Marketplace</title>
      </Helmet>
      <div className={connectWalletPageStyles[connectWalletPageClassName]}>
        <div className={connectWalletPageStyles[`${connectWalletPageClassName}__img-container`]}>
          <div className={connectWalletPageStyles[`${connectWalletPageClassName}__img`]}></div>
        </div>
        <div className={connectWalletPageStyles[`${connectWalletPageClassName}__wallet-selection`]}>
          <div className={connectWalletPageStyles[`${connectWalletPageClassName}__title`]}>
            <Title description={description} heading="h1" title={title} />
          </div>
          {choice.map((item) => (
            <SelectionOfWalletsPage key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export { ConnectWalletPage };
