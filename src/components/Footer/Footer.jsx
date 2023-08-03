import React from 'react';
import './Footer.scss';
import { Menu } from '../Menu/index.js';
import { Logo } from '../units';
import { Community } from './Community/index.js';

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
        <div className="footer__weekly_digest">
          <h4 className="weekly_digest__title">Join our weekly digest</h4>
          <p>Get exclusive promotions &amp;&nbsp;updates straight to&nbsp;your inbox.</p>
          <label className="subscription">
            <input placeholder="Enter your email here" className="input__email" />
            <div>
              <a className="button">Subscribe</a>
            </div>
          </label>
        </div>
      </div>
      <div className="footer__was_done">
        <p>Ⓒ NFT Market. Use this template freely.</p>
      </div>
    </div>
  </footer>
);

export { Footer };
