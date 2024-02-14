import React from 'react';
import './SelectionOfWalletPage.scss';
import { Link } from 'react-router-dom';
import { Icon } from '../../../units';

const selectionOfWalletsPageClassName = 'wallet-selection';

const SelectionOfWalletsPage = ({ item }) => {
  const { icon, titleChoice } = item;

  return (
    <Link to="tmp">
      <div className={selectionOfWalletsPageClassName}>
        <div className={`${selectionOfWalletsPageClassName}__choice`}>
          <div className={`${selectionOfWalletsPageClassName}__choice-img`}>
            <Icon code={icon} />
          </div>
          <p dangerouslySetInnerHTML={{ __html: titleChoice }} />
        </div>
      </div>
    </Link>
  );
};

export { SelectionOfWalletsPage };
