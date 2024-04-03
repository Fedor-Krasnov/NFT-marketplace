import React from 'react';
import { Link } from 'react-router-dom';
import { topCreatorsPageData } from '../../../../mocks/Page/index.js';
import topCreatorsSectionPageStyles from './TopCreatorsSectionPage.module.scss';

const topCreatorsSectionClassName = 'top-creators-section';

const TopCreatorsSectionPage = () => (
  <section className={topCreatorsSectionPageStyles[topCreatorsSectionClassName]}>
    <div className={topCreatorsSectionPageStyles[`${topCreatorsSectionClassName}__list-header`]}>
      <p className={topCreatorsSectionPageStyles[`${topCreatorsSectionClassName}__example-1`]}>#</p>
      <p className={topCreatorsSectionPageStyles[`${topCreatorsSectionClassName}__example-2`]}>Artist</p>
      <p className={topCreatorsSectionPageStyles[`${topCreatorsSectionClassName}__example-3`]}>Change</p>
      <p className={topCreatorsSectionPageStyles[`${topCreatorsSectionClassName}__example-4`]}>NFTs Sold</p>
      <p className={topCreatorsSectionPageStyles[`${topCreatorsSectionClassName}__example-5`]}>Volume</p>
    </div>
    {topCreatorsPageData.userTop.map(({ image, userName, change, nftSold, volume }, userTopIndex) => (
      <div key={userName} className={topCreatorsSectionPageStyles[`${topCreatorsSectionClassName}__creator`]}>
        <div className={topCreatorsSectionPageStyles[`${topCreatorsSectionClassName}__creator-container`]}>
          <div className={topCreatorsSectionPageStyles[`${topCreatorsSectionClassName}__serial-number`]}>
            {userTopIndex + 1}
          </div>
          <div className={topCreatorsSectionPageStyles[`${topCreatorsSectionClassName}__artist-details`]}>
            <div className={topCreatorsSectionPageStyles[`${topCreatorsSectionClassName}__avatar`]}>
              <img alt={image.alt} src={image.src} />
            </div>
            <p
              className={topCreatorsSectionPageStyles[`${topCreatorsSectionClassName}__name`]}
              dangerouslySetInnerHTML={{ __html: userName }}
            />
          </div>
          <div
            className={topCreatorsSectionPageStyles[`${topCreatorsSectionClassName}__change`]}
            dangerouslySetInnerHTML={{ __html: change }}
          />
          <d
            className={topCreatorsSectionPageStyles[`${topCreatorsSectionClassName}__nft-sold`]}
            dangerouslySetInnerHTML={{ __html: nftSold }}
          />
          <div
            className={topCreatorsSectionPageStyles[`${topCreatorsSectionClassName}__volume`]}
            dangerouslySetInnerHTML={{ __html: volume }}
          />
        </div>
        <Link to={`/user-profile/${userName}`} />
      </div>
    ))}
  </section>
);

export { TopCreatorsSectionPage };
