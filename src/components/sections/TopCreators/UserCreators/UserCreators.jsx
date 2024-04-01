import React from 'react';
import { Link } from 'react-router-dom';
import { topCreatorsData } from '../../../../mocks';
import userCreatorsStyles from './UserCreators.module.scss';

const userCreatorsClassName = 'creators';

const UserCreators = () => (
  <div className={userCreatorsStyles[userCreatorsClassName]}>
    {topCreatorsData.userCreators.map(({ image, userName, totalSales }, userCreatorIndex) => (
      <Link to={`/user-profile/${userName}`}>
        <div key={userName} className={userCreatorsStyles[`${userCreatorsClassName}__user`]}>
          <span className={userCreatorsStyles[`${userCreatorsClassName}__number`]}>{userCreatorIndex + 1}</span>
          <div className={userCreatorsStyles[`${userCreatorsClassName}__avatar`]}>
            <img alt={image.alt} src={image.src} />
          </div>
          <div className={userCreatorsStyles[`${userCreatorsClassName}__details`]}>
            <h3>{userName}</h3>
            <p>
              <span>Total Sales:</span> {totalSales}
            </p>
          </div>
        </div>
      </Link>
    ))}
  </div>
);

export { UserCreators };
