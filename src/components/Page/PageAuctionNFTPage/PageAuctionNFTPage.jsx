import React from 'react';
import './PageAuctionNFTPage.scss';
import { useParams } from 'react-router-dom';
import { pageAuctionNFTPageData } from '../../../mocks/Page';
import { WorkLayoutSection } from '../../sections';
import { Button, IconCode } from '../../units';
import { DescriptionNFTSectionPage } from './DescriptionNFTSectionPage';
import { NFTSectionPage } from './NFTSectionPage';

const PageAuctionNftPageClassName = 'nft-auction-page';

const PageAuctionNftPage = () => {
  const { titleLink, buttonTitle } = pageAuctionNFTPageData;
  const { userName } = useParams();

  return (
    <>
      <NFTSectionPage />
      <DescriptionNFTSectionPage />
      <WorkLayoutSection userName={userName} />
      <Button
        buttonTitle={buttonTitle}
        className={`${PageAuctionNftPageClassName}__button`}
        icon={IconCode.arrowToTheRight}
        outline
        title={titleLink}
        to={`/user-profile/${userName}`}
        width="fill"
      />
    </>
  );
};

export { PageAuctionNftPage };
