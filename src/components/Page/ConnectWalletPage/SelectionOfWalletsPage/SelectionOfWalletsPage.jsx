import React from 'react';
import './SelectionOfWalletPage.scss';

const selectionOfWalletsPageClassName = 'wallet-selection';

const SelectionOfWalletsPage = ({ item }) => {
  const { image, titleChoice } = item;

  return (
    <div className={selectionOfWalletsPageClassName}>
      <div className={`${selectionOfWalletsPageClassName}__choice`}>
        <div className={`${selectionOfWalletsPageClassName}__choice-img`}>
          <img alt={image.alt} src={image.src} />
        </div>
        <p dangerouslySetInnerHTML={{ __html: titleChoice }} />
      </div>
    </div>
  );
};

export { SelectionOfWalletsPage };
