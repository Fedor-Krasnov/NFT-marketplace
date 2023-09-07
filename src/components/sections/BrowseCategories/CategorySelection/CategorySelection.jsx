import React from 'react';
import './CategorySelection.scss';

const CategorySelection = ({ data }) => {
  const { id, image, icon, category } = data;

  return (
    <>
      <li>
        <div className="nft-card">
          <div className="nft-card__img">
            <img alt={image.alt} src={image.src} />
            <div className="nft-card__icon">
              <img alt="Nft card icon" src={icon.src} />
            </div>
          </div>
          <div className="nft-card__details nft-details">
            <h3>{category}</h3>
          </div>
        </div>
      </li>
      {/* <li>*/}
      {/*  <a href="">*/}
      {/*    <div className="nft-card">*/}
      {/*      <div className="nft-card__img">*/}
      {/*        <img alt="Nft card" src="../../media/nft-cards/nft-categories-8.svg" />*/}
      {/*        <div className="nft-card__icon">*/}
      {/*          <img alt="Nft card icon" src="../../media/icons/browse-categories/virtual-worlds.svg" />*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*      <div className="nft-card__details nft-details">*/}
      {/*        <h3>Virtual Worlds</h3>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </a>*/}
      {/* </li>*/}
    </>
  );
};

export { CategorySelection };
