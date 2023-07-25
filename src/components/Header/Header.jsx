import React from 'react';
import { Button } from '../units/Button';
import { IconCode } from '../units/Icon';
import { Logo } from '../units/Logo';
import './Header.scss';
import { HeaderMenu } from './HeaderMenu';

const Header = () => (
  <header className="header">
    <Logo />
    <div className="navbar">
      <HeaderMenu />
      <div className="header__sign-up">
        <Button icon={IconCode.user} title="Sign Up" to="/pages/create-account.html" />
      </div>
    </div>
    <div className="burger">
      <div className="burger__container">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </header>
);

export { Header };
