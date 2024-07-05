import React from 'react';
import { rankingsPageData } from '../../../mocks/Page';
import { Title } from '../../units';
import { TitleSize } from '../../units/Title/types';
import rankingsStyles from './Rankings.module.scss';
import { UserList } from './UserList';

const rankingsClassName = 'rankings';

const Rankings = () => {
  const { title, description } = rankingsPageData;

  return (
    <>
      <div className={rankingsStyles[rankingsClassName]}>
        <div className={rankingsStyles[`${rankingsClassName}__title-page`]}>
          <Title description={description} heading={TitleSize.h1} title={title} />
        </div>
        <div className={rankingsStyles[`${rankingsClassName}__control-panel-desktop`]}>
          <a href="src/components/sections/Rankings">
            <p>Today</p>
          </a>
          <a href="src/components/sections/Rankings">
            <p>This Week</p>
          </a>
          <a href="src/components/sections/Rankings">
            <p>This Month</p>
          </a>
          <a href="src/components/sections/Rankings">
            <p>All Time</p>
          </a>
        </div>
        <div className={rankingsStyles[`${rankingsClassName}__control-panel-adaptive`]}>
          <a href="src/components/sections/Rankings">
            <p>1d</p>
          </a>
          <a href="src/components/sections/Rankings">
            <p>7d</p>
          </a>
          <a href="src/components/sections/Rankings">
            <p>30d</p>
          </a>
          <a href="src/components/sections/Rankings">
            <p>All Time</p>
          </a>
        </div>
        <UserList />
      </div>
    </>
  );
};

export { Rankings };
