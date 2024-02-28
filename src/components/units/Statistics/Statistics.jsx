import React from 'react';
import './Statistics.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { heroSectionData } from '../../../mocks';

const Statistics = ({ className, statistics }) => {
  const { link } = heroSectionData;

  return (
    <div className={classNames('statistics', className)}>
      <ul>
        {statistics.map(({ title, description }, index) => (
          <li key={index}>
            <Link to={link}>
              <h2 dangerouslySetInnerHTML={{ __html: title }} />
              <p dangerouslySetInnerHTML={{ __html: description }} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Statistics };
