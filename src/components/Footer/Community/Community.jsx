import React from 'react';
import classNames from 'classnames';
import './Community.scss';
import { Link } from 'react-router-dom';
import { communityData } from '../../../mocks';
import { Icon, IconCode } from '../../units';

const communityClassName = 'community';

const Community = ({ className }) => (
  <div className={classNames('community', className)}>
    <ul className={`${communityClassName}__contacts`}>
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
