import React from 'react';
import './Menu.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { menuData } from '../../mocks';

const Menu = ({ className, isGridRows, isModal }) => (
  <nav
    className={classNames(
      'menu',
      {
        menu_modal: isModal,
        'menu_grid-rows': isGridRows,
      },
      className,
    )}
  >
    <ul>
      {menuData.map(({ path, title }) => (
        <li key={path}>
          <Link dangerouslySetInnerHTML={{ __html: title }} to={path} />
        </li>
      ))}
    </ul>
  </nav>
);

export { Menu };
