import React from 'react';
import './SelectionOfWalletPage.scss';
import { Icon } from '../../../units/index.js';

const selectionOfWalletsPageClassName = 'wallet-selection';

const SelectionOfWalletsPage = ({ item }) => {
  const { icon, titleChoice } = item;

  return (
    <div className={selectionOfWalletsPageClassName}>
      <div className={`${selectionOfWalletsPageClassName}__choice`}>
        <div className={`${selectionOfWalletsPageClassName}__choice-img`}>
          <Icon code={icon} />
        </div>
        <p dangerouslySetInnerHTML={{ __html: titleChoice }} />
      </div>
    </div>
  );
};

export { SelectionOfWalletsPage };
