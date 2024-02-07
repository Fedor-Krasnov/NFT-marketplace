import React from 'react';
import './DescriptionNFTSectionPage.scss';
import { Link } from 'react-router-dom';
import { descriptionNFTSectionData } from '../../../../mocks/Page';
import { Countdown } from '../../../sections/Auction/Countdown/index.js';
import { Icon, IconCode, Title } from '../../../units';

const DescriptionNFTSectionClassName = 'description-nft-section';

const DescriptionNFTSectionPage = () => {
  const { title, description, userName, image, username } = descriptionNFTSectionData;

  return (
    <section className={DescriptionNFTSectionClassName}>
      <div className={`${DescriptionNFTSectionClassName}__main-information`}>
        <div className={`${DescriptionNFTSectionClassName}__description-details`}>
          <Title description={description} title={title} />
          <div className={`${DescriptionNFTSectionClassName}__author`}>
            <span>Created By</span>
            <Link to={`/user-profile/${userName}`}>
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
      </div>
      <div className={`${DescriptionNFTSectionClassName}__countdown`}>
        <Countdown />
      </div>
    </section>
  );
};

export { DescriptionNFTSectionPage };
