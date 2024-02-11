import React from 'react';
import './DescriptionNFTSectionPage.scss';
import { Link } from 'react-router-dom';
import { pageAuctionNFTPageData } from '../../../../mocks/Page';
import { Countdown } from '../../../sections/Auction/Countdown';
import { IconCode, Title } from '../../../units';

const DescriptionNFTSectionClassName = 'description-nft-section';

const DescriptionNFTSectionPage = () => {
  const { titleAuction, descriptionAuction, userName, image, username, titleLink, buttonTitle } =
    pageAuctionNFTPageData;

  return (
    <section className={DescriptionNFTSectionClassName}>
      <div className={`${DescriptionNFTSectionClassName}__main-information`}>
        <div className={`${DescriptionNFTSectionClassName}__description-details`}>
          <Title description={descriptionAuction} title={titleAuction} />
          <div className={`${DescriptionNFTSectionClassName}__author`}>
            <span>Created By</span>
            <Link to={`/user-profile/${userName}`}>
              <div className={`${DescriptionNFTSectionClassName}__countdown-mobile`}>
                <Countdown buttonTitle />
              </div>
              <div className={`${DescriptionNFTSectionClassName}__user`}>
                <div className={`${DescriptionNFTSectionClassName}__avatar`}>
                  {image && <img alt={image.alt} src={image.src} />}
                </div>
                <div
                  className={`${DescriptionNFTSectionClassName}__username`}
                  dangerouslySetInnerHTML={{ __html: username }}
                />
              </div>
            </Link>
          </div>
          <div className={`${DescriptionNFTSectionClassName}__description`}>
            <span>Description</span>
          </div>
          <div className={`${DescriptionNFTSectionClassName}__details`}>
            <span>Details</span>
          </div>
          <div className={`${DescriptionNFTSectionClassName}__tags`}>
            <span>Tags</span>
          </div>
        </div>
        <div className={`${DescriptionNFTSectionClassName}__countdown-desktop`}>
          <Countdown buttonTitle />
        </div>
      </div>
      <div className={`${DescriptionNFTSectionClassName}__link`}>
        <Title
          buttonIcon={IconCode.arrowToTheRight}
          buttonTitle={buttonTitle}
          heading="h2"
          title={titleLink}
          to={`/user-profile/${userName}`}
        />
      </div>
    </section>
  );
};

export { DescriptionNFTSectionPage };
