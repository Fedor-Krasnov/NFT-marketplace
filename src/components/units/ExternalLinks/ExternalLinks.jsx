import React from 'react';
import './ExternalLinks.scss';
import { Link } from 'react-router-dom';
import { Icon, IconCode } from '../Icon';

const externalLinksClassName = 'external-links';

const ExternalLinks = ({ data }) => (
  <ul className={externalLinksClassName}>
    {data.map(({ link, title }, indexDetail) => (
      <li key={indexDetail}>
        <Icon code={IconCode.globe} />
        <Link dangerouslySetInnerHTML={{ __html: title }} to={link} />
      </li>
    ))}
  </ul>
);

export { ExternalLinks };
