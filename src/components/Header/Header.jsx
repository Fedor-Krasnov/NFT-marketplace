import React from 'react';
import headerStyles from './Header.scss';
import { Logo } from '../units/Logo';
import { Button } from '../units/Button';

const Header = () => (
  <header className="header">
    <Logo />
    <div className="navbar">
      <nav>
        <ul>
          <li className="header__marketplace">
            <a href="/pages/browse-marketplace.html">Marketplace</a>
          </li>
          <li className="header__rankings">
            <a href="/pages/top-creators.html">Rankings</a>
          </li>
          <li className="header__connect-wallet">
            <a href="/pages/connect-wallet.html">Connect a&nbsp;wallet</a>
          </li>
        </ul>
      </nav>
      <div className="header__sign-up">
        <Button title="Sign Up" to="/pages/create-account.html" />
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
