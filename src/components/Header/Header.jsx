import React from 'react';
import { pageCheck } from '../../helpers';
import { headerData } from '../../mocks/components/headerData.js';
import { Menu } from '../Menu';
import { Button } from '../units/Button';
import { IconCode } from '../units/Icon';
import { Logo } from '../units/Logo';
import './Header.scss';
import { Burger } from './Burger';

const headerClassName = 'header';

const Header = () => {
  const { isAuthorizationPage } = pageCheck();
  const { title, to } = headerData;

  return (
    <header className={headerClassName}>
      <Logo />
      <div className={`${headerClassName}__navbar`}>
        <Menu />
        {!isAuthorizationPage && <Button icon={IconCode.user} title={title} to={to} />}
      </div>
      <Burger />
    </header>
  );
};

export { Header };
