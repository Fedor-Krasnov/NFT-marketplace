import React from 'react';
import tabsStyles from './Tabs.module.scss';

const tabsClassName = 'tabs';

const Tabs = ({ data }) => (
  <ul className={tabsStyles[tabsClassName]}>
    <div className={tabsStyles[`${tabsClassName}__choice-point`]}>
      <div className={tabsStyles[`${tabsClassName}__trait`]}></div>
      <div className={tabsStyles[`${tabsClassName}__buttons`]}>
        {data.map(({ quantity, title }, dataIndex) => (
          <a key={dataIndex} href="src/components/sections/UserProfile/DetailedUserProfile">
            {title} <span>{quantity}</span>
          </a>
        ))}
      </div>
    </div>
  </ul>
);

export { Tabs };
