import React from 'react';
import './Footer.scss';
import { Menu } from '../Menu';
import { Subscription } from '../Subscription';
import { Logo } from '../units';
import { Community } from './Community';

const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <div className="footer__content">
        <div className="footer__copyright">
          <Logo className="footer__logo" />
          <p>NFT marketplace&nbsp;UI created with Anima for Figma.</p>
          <Community className="footer__community" />
        </div>
        <div>
          <h4>Explore</h4>
          <Menu className="footer__menu" isGridRows />
        </div>
        <Subscription />
      </div>
      <div className="footer__was_done">
        <p>Ⓒ NFT Market. Use this template freely.</p>
      </div>
    </div>
  </footer>
);

export { Footer };
