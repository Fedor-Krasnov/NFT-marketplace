import React from 'react';
import './Statistics.scss';
import classNames from 'classnames';

const Statistics = ({ className, statistics }) => (
  <div className={classNames('statistics', className)}>
    <ul>
      {statistics.map(({ title, description }, index) => (
        <li key={index}>
          <h2 dangerouslySetInnerHTML={{ __html: title }} />
          <p dangerouslySetInnerHTML={{ __html: description }} />
        </li>
      ))}
    </ul>
  </div>
);

export { Statistics };
