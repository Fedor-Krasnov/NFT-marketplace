import React from 'react';
import './SelectionOfWallets.scss';

const SelectionOfWallets = ({ item }) => {
  const { image, titleChoice } = item;

  return (
    <div className="wallet-selection__container">
      <div className="choice">
        <div className="choice__img">
          <img alt={image.alt} src={image.src} />
        </div>
        <p dangerouslySetInnerHTML={{ __html: titleChoice }} />
      </div>
    </div>
  );
};

export { SelectionOfWallets };
