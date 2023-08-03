import React from 'react';
import classNames from 'classnames';
import './Community.scss';
import { Link } from 'react-router-dom';
import { communityData } from '../../../mocks';
import { Icon, IconCode } from '../../units';

const Community = ({ className }) => (
  <div className={classNames('community', className)}>
    <p>Join our community</p>
    <ul className="community__contacts">
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
