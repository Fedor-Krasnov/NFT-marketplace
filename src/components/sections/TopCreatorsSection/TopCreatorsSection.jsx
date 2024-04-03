import React from 'react';
import { Link } from 'react-router-dom';
import { topCreatorsPageData } from '../../../mocks/Page';
import topCreatorsSectionStyles from './TopCreatorsSection.module.scss';

const topCreatorsSectionClassName = 'top-creators-section';

const TopCreatorsSection = () => (
  <section className={topCreatorsSectionStyles[topCreatorsSectionClassName]}>
    <div className={topCreatorsSectionStyles[`${topCreatorsSectionClassName}__list-header`]}>
      <p className={topCreatorsSectionStyles[`${topCreatorsSectionClassName}__example-1`]}>#</p>
      <p className={topCreatorsSectionStyles[`${topCreatorsSectionClassName}__example-2`]}>Artist</p>
      <p className={topCreatorsSectionStyles[`${topCreatorsSectionClassName}__example-3`]}>Change</p>
      <p className={topCreatorsSectionStyles[`${topCreatorsSectionClassName}__example-4`]}>NFTs Sold</p>
      <p className={topCreatorsSectionStyles[`${topCreatorsSectionClassName}__example-5`]}>Volume</p>
    </div>
    {topCreatorsPageData.userTop.map(({ image, userName, change, nftSold, volume }, userTopIndex) => (
      <div key={userName} className={topCreatorsSectionStyles[`${topCreatorsSectionClassName}__creator`]}>
        <div className={topCreatorsSectionStyles[`${topCreatorsSectionClassName}__creator-container`]}>
          <div className={topCreatorsSectionStyles[`${topCreatorsSectionClassName}__serial-number`]}>
            {userTopIndex + 1}
          </div>
          <div className={topCreatorsSectionStyles[`${topCreatorsSectionClassName}__artist-details`]}>
            <div className={topCreatorsSectionStyles[`${topCreatorsSectionClassName}__avatar`]}>
              <img alt={image.alt} src={image.src} />
            </div>
            <p
              className={topCreatorsSectionStyles[`${topCreatorsSectionClassName}__name`]}
              dangerouslySetInnerHTML={{ __html: userName }}
            />
          </div>
          <div
            className={topCreatorsSectionStyles[`${topCreatorsSectionClassName}__change`]}
            dangerouslySetInnerHTML={{ __html: change }}
          />
          <d
            className={topCreatorsSectionStyles[`${topCreatorsSectionClassName}__nft-sold`]}
            dangerouslySetInnerHTML={{ __html: nftSold }}
          />
          <div
            className={topCreatorsSectionStyles[`${topCreatorsSectionClassName}__volume`]}
            dangerouslySetInnerHTML={{ __html: volume }}
          />
        </div>
        <Link to={`/user-profile/${userName}`} />
      </div>
    ))}
  </section>
);

export { TopCreatorsSection };
