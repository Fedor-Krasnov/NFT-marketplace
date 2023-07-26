import React from 'react';
import { Button } from '../units/Button';
import { IconCode } from '../units/Icon';
import { Logo } from '../units/Logo';
import './Header.scss';
import { Burger } from './Burger';
import { HeaderMenu } from './HeaderMenu';

const Header = () => (
  <header className="header">
    <Logo />
    <div className="header__navbar">
      <HeaderMenu />
      <Button icon={IconCode.user} title="Sign Up" to="/pages/create-account.html" />
    </div>
    <Burger />
  </header>
);

export { Header };
