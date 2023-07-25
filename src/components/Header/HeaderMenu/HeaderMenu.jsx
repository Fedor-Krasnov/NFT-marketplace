import React from 'react';
import './HeaderMenu.scss';
import { Link } from 'react-router-dom';
import { headerMenuData } from '../../../mocks/headerMenuData.js';

const HeaderMenu = () => (
  <nav className="header-menu">
    <ul>
      {headerMenuData.map(({ path, title }) => (
        <li key={path}>
          <Link dangerouslySetInnerHTML={{ __html: title }} to={path} />
        </li>
      ))}
    </ul>
  </nav>
);

export { HeaderMenu };
