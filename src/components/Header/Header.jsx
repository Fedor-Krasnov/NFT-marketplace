import React from 'react';
import { Menu } from '../Menu';
import { Button } from '../units/Button';
import { IconCode } from '../units/Icon';
import { Logo } from '../units/Logo';
import './Header.scss';
import { Burger } from './Burger';
import { headerData } from '../../mocks/components/headerData.js';

const Header = () => {
  const { title, to } = headerData;

  return (
    <header className="header">
      <Logo />
      <div className="header__navbar">
        <Menu />
        <Button icon={IconCode.user} title={title} to={to} />
      </div>
      <Burger />
    </header>
  );
};

export { Header };
