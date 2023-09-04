import React from 'react';
import './UserCreators.scss';
import { topCreatorsData } from '../../../../mocks';

const UserCreators = () => (
  <div className="creators">
    {topCreatorsData.userCreators.map(({ image, userName, totalSales }, userCreatorIndex) => (
      <div key={userName} className="creators__user">
        <span className="creators__number">{userCreatorIndex + 1}</span>
        <div className="creators__avatar">
          <img alt={image.alt} src={image.src} />
        </div>
        <div className="creators__details">
          <h3>{userName}</h3>
          <p>
            <span>Total Sales:</span> {totalSales}
          </p>
        </div>
      </div>
    ))}
  </div>
);

export { UserCreators };
