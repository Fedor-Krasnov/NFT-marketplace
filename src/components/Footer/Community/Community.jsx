import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { communityData } from '../../../mocks';
import { Icon, IconCode } from '../../units';
import communityStyles from './Community.module.scss';

const communityClassName = 'community';

const Community = ({ className }) => (
  <div className={classNames(communityStyles['community'], className)}>
    <ul className={communityStyles[`${communityClassName}__contacts`]}>
      {communityData.map(({ link, network }) => (
        <li key={network}>
          <Link to={link}>
            <Icon code={IconCode[network]} />
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export { Community };
