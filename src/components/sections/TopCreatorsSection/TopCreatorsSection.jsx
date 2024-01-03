import React from 'react';
import './TopCreatorsSection.scss';
import { Link } from 'react-router-dom';
import { topCreatorsPageData } from '../../../mocks/Page';

const topCreatorsSectionClassName = 'top-creators-section';

const TopCreatorsSection = () => (
  <section className={topCreatorsSectionClassName}>
    <div className={`${topCreatorsSectionClassName}__list-header`}>
      <p className={`${topCreatorsSectionClassName}__example-1`}>#</p>
      <p className={`${topCreatorsSectionClassName}__example-2`}>Artist</p>
      <p className={`${topCreatorsSectionClassName}__example-3`}>Change</p>
      <p className={`${topCreatorsSectionClassName}__example-4`}>NFTs Sold</p>
      <p className={`${topCreatorsSectionClassName}__example-5`}>Volume</p>
    </div>
    {topCreatorsPageData.userTop.map(({ image, userName, change, nftSold, volume }, userTopIndex) => (
      <div key={userName} className={`${topCreatorsSectionClassName}__creator`}>
        <div className={`${topCreatorsSectionClassName}__creator-container`}>
          <div className={`${topCreatorsSectionClassName}__serial-number`}>{userTopIndex + 1}</div>
          <div className={`${topCreatorsSectionClassName}__artist-details`}>
            <div className={`${topCreatorsSectionClassName}__avatar`}>
              <img alt={image.alt} src={image.src} />
            </div>
            <p className={`${topCreatorsSectionClassName}__name`} dangerouslySetInnerHTML={{ __html: userName }} />
          </div>
          <div className={`${topCreatorsSectionClassName}__change`} dangerouslySetInnerHTML={{ __html: change }} />
          <d className={`${topCreatorsSectionClassName}__nft-sold`} dangerouslySetInnerHTML={{ __html: nftSold }} />
          <div className={`${topCreatorsSectionClassName}__volume`} dangerouslySetInnerHTML={{ __html: volume }} />
        </div>
        <Link to={`/user-profile/${userName}`} />
      </div>
    ))}
  </section>
);

export { TopCreatorsSection };
