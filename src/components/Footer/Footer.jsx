import React from 'react';
import './Footer.scss';
import { footerData } from '../../mocks/components';
import { Menu } from '../Menu';
import { Subscription } from '../Subscription';
import { Logo } from '../units';
import { Community } from './Community';

const Footer = () => {
  const { copyright, descriptions, titles } = footerData;

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__logo-and-community">
            <Logo className="footer__logo" />
            <p dangerouslySetInnerHTML={{ __html: descriptions.text1 }}></p>
            <Community className="footer__community" />
          </div>
          <div>
            <h4 dangerouslySetInnerHTML={{ __html: titles.explore }} />
            <Menu className="footer__menu" isGridRows />
          </div>
          <div>
            <h4 dangerouslySetInnerHTML={{ __html: titles.joinOur }} />
            <p dangerouslySetInnerHTML={{ __html: descriptions.text2 }} />
            <Subscription />
          </div>
        </div>
        <div className="footer__copyright">
          <p dangerouslySetInnerHTML={{ __html: copyright }} />
        </div>
      </div>
    </footer>
  );
};

export { Footer };
