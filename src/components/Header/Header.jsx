import React from 'react';
import { Menu } from '../Menu';
import { Button } from '../units/Button';
import { IconCode } from '../units/Icon';
import { Logo } from '../units/Logo';
import './Header.scss';
import { Burger } from './Burger';

const Header = () => (
  <header className="header">
    <Logo />
    <div className="header__navbar">
      <Menu />
      <Button icon={IconCode.user} title="Sign Up" to="/pages/create-account.html" />
    </div>
    <Burger />
  </header>
);

export { Header };
