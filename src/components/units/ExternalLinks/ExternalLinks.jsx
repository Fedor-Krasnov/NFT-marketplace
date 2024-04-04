import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, IconCode } from '../Icon';
import externalLinksStyles from './ExternalLinks.module.scss';

const externalLinksClassName = 'external-links';

const ExternalLinks = ({ data }) => (
  <ul className={externalLinksStyles[externalLinksClassName]}>
    {data.map(({ link, title }, indexDetail) => (
      <li key={indexDetail}>
        <Icon code={IconCode.globe} />
        <Link dangerouslySetInnerHTML={{ __html: title }} to={link} />
      </li>
    ))}
  </ul>
);

export { ExternalLinks };
