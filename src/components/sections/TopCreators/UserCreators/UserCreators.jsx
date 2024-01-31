import React from 'react';
import './UserCreators.scss';
import { Link } from 'react-router-dom';
import { topCreatorsData } from '../../../../mocks';

const userCreatorsClassName = 'creators';

const UserCreators = () => (
  <div className={userCreatorsClassName}>
    {topCreatorsData.userCreators.map(({ image, userName, totalSales }, userCreatorIndex) => (
      <Link to="tmp">
        <div key={userName} className={`${userCreatorsClassName}__user`}>
          <span className={`${userCreatorsClassName}__number`}>{userCreatorIndex + 1}</span>
          <div className={`${userCreatorsClassName}__avatar`}>
            <img alt={image.alt} src={image.src} />
          </div>
          <div className={`${userCreatorsClassName}__details`}>
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
