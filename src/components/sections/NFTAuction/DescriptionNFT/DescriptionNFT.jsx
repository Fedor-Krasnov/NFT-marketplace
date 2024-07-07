import React from 'react';
import { Link } from 'react-router-dom';
import { NFTAuctionPageData } from '../../../../mocks/Page';
import { Text, Title, Tags, ExternalLinks } from '../../../units';
import { TitleSize } from '../../../units/Title/types';
import { Countdown } from '../../Auction/Countdown';
import DescriptionNFTSectionStyles from './DescriptionNFT.module.scss';

const DescriptionNFTSectionClassName = 'description-nft-section';

const DescriptionNFT = () => {
  const { titleAuction, descriptionAuction, userName, image, username, description, tags, details } =
    NFTAuctionPageData;

  return (
    <div className={DescriptionNFTSectionStyles[DescriptionNFTSectionClassName]}>
      <div className={DescriptionNFTSectionStyles[`${DescriptionNFTSectionClassName}__main-information`]}>
        <div className={DescriptionNFTSectionStyles[`${DescriptionNFTSectionClassName}__description-details`]}>
          <Title
            className={`${DescriptionNFTSectionClassName}__title`}
            description={descriptionAuction}
            heading={TitleSize.h1}
            title={titleAuction}
          />
          <div className={DescriptionNFTSectionStyles[`${DescriptionNFTSectionClassName}__countdown-mobile`]}>
            <Countdown buttonTitle />
          </div>
          <div className={DescriptionNFTSectionStyles[`${DescriptionNFTSectionClassName}__author`]}>
            <span>Created By</span>
            <Link to={`/user-profile/${userName}`}>
              <div className={DescriptionNFTSectionStyles[`${DescriptionNFTSectionClassName}__user`]}>
                <div className={DescriptionNFTSectionStyles[`${DescriptionNFTSectionClassName}__avatar`]}>
                  {image && <img alt={image.alt} src={image.src} />}
                </div>
                <div
                  className={DescriptionNFTSectionStyles[`${DescriptionNFTSectionClassName}__username`]}
                  dangerouslySetInnerHTML={{ __html: username }}
                />
              </div>
            </Link>
          </div>
          <div className={DescriptionNFTSectionStyles[`${DescriptionNFTSectionClassName}__description`]}>
            <span>Description</span>
            <Text text={description} />
          </div>
          <div className={DescriptionNFTSectionStyles[`${DescriptionNFTSectionClassName}__details`]}>
            <span>Details</span>
            <ExternalLinks data={details} />
          </div>
          <div className={DescriptionNFTSectionStyles[`${DescriptionNFTSectionClassName}__tags`]}>
            <span>Tags</span>
            <Tags data={tags} />
          </div>
        </div>
        <div className={DescriptionNFTSectionStyles[`${DescriptionNFTSectionClassName}__countdown-desktop`]}>
          <Countdown buttonTitle />
        </div>
      </div>
    </div>
  );
};

export { DescriptionNFT };
