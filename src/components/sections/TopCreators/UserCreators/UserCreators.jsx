import React from 'react';
import { Link } from 'react-router-dom';
import userCreatorsStyles from './UserCreators.module.scss';

const userCreatorsClassName = 'creators';

const UserCreators = ({ content }) => {
  const { userCreators } = content;

  return (
    <div className={userCreatorsStyles[userCreatorsClassName]}>
      {userCreators.map(({ image, userName, totalSales }, userCreatorIndex) => (
        <Link key={userName} to={`/user-profile/${userName}`}>
          <div className={userCreatorsStyles[`${userCreatorsClassName}__user`]}>
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
};

export { UserCreators };
