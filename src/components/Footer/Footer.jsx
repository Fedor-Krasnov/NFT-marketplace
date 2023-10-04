import React from 'react';
import './Footer.scss';
import { footerData } from '../../mocks/components';
import { Menu } from '../Menu';
import { Subscription } from '../Subscription';
import { Logo } from '../units';
import { Community } from './Community';

const Footer = () => {
  const { description, text, logo } = footerData;

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__copyright">
            <Logo className="footer__logo" />
            <p>{logo.description.text1}</p>
            <Community className="footer__community" />
          </div>
          <div>
            <h4>Explore</h4>
            <Menu className="footer__menu" isGridRows />
          </div>
          <div className="Subscription">
            <h4>{logo.description.text2}</h4>
            <p>{logo.description.text3}</p>
            <Subscription />
          </div>
        </div>
        <div className="footer__was_done">
          <p>Ⓒ NFT Market. Use this template freely.</p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
