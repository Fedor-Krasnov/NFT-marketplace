import React from 'react';
import './Footer.scss';
import { footerData } from '../../mocks/components';
import { Menu } from '../Menu';
import { Subscription } from '../Subscription';
import { Logo } from '../units';
import { Community } from './Community';

const footerClassName = 'footer';

const Footer = () => {
  const { copyright, descriptions, titles } = footerData;

  return (
    <footer className={footerClassName}>
      <div className={`${footerClassName}__container`}>
        <div className={`${footerClassName}__content`}>
          <div className={`${footerClassName}__logo-and-community`}>
            <Logo className={`${footerClassName}__logo`} />
            <p dangerouslySetInnerHTML={{ __html: descriptions.text1 }} />
            <p dangerouslySetInnerHTML={{ __html: descriptions.text2 }} />
            <Community className={`${footerClassName}__community`} />
          </div>
          <div>
            <h4 dangerouslySetInnerHTML={{ __html: titles.explore }} />
            <Menu className={`${footerClassName}__menu`} isGridRows />
          </div>
          <div>
            <h4 dangerouslySetInnerHTML={{ __html: titles.joinOur }} />
            <p dangerouslySetInnerHTML={{ __html: descriptions.text3 }} />
            <Subscription />
          </div>
        </div>
        <div className={`${footerClassName}__copyright`}>
          <p dangerouslySetInnerHTML={{ __html: copyright }} />
        </div>
      </div>
    </footer>
  );
};

export { Footer };
