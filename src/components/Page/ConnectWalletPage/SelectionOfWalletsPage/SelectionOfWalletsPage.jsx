import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../../../units';
import selectionOfWalletsPageStyles from './SelectionOfWalletPage.module.scss';

const selectionOfWalletsPageClassName = 'wallet-selection';

const SelectionOfWalletsPage = ({ item }) => {
  const { icon, titleChoice } = item;

  return (
    <Link to="tmp">
      <div className={selectionOfWalletsPageStyles[selectionOfWalletsPageClassName]}>
        <div className={selectionOfWalletsPageStyles[`${selectionOfWalletsPageClassName}__choice`]}>
          <div className={selectionOfWalletsPageStyles[`${selectionOfWalletsPageClassName}__choice-img`]}>
            <Icon code={icon} />
          </div>
          <p dangerouslySetInnerHTML={{ __html: titleChoice }} />
        </div>
      </div>
    </Link>
  );
};

export { SelectionOfWalletsPage };
