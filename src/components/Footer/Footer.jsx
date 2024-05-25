import React from 'react';
import { footerData } from '../../mocks/components';
import { Subscription } from '../innerComponents';
import { Menu } from '../Menu';
import { Logo } from '../units';
import { Community } from './Community';
import footerStyles from './Footer.module.scss';

const footerClassName = 'footer';

const Footer = () => {
  const { copyright, descriptions, titles } = footerData;

  return (
    <footer className={footerStyles[footerClassName]}>
      <div className={footerStyles[`${footerClassName}__container`]}>
        <div className={footerStyles[`${footerClassName}__content`]}>
          <div className={footerStyles[`${footerClassName}__logo-and-community`]}>
            <Logo className={footerStyles[`${footerClassName}__logo`]} />
            <p dangerouslySetInnerHTML={{ __html: descriptions.text1 }} />
            <p dangerouslySetInnerHTML={{ __html: descriptions.text2 }} />
            <Community className={footerStyles[`${footerClassName}__community`]} />
          </div>
          <div>
            <h4 dangerouslySetInnerHTML={{ __html: titles.explore }} />
            <Menu className={footerStyles[`${footerClassName}__menu`]} isGridRows />
          </div>
          <div>
            <h4 dangerouslySetInnerHTML={{ __html: titles.joinOur }} />
            <p dangerouslySetInnerHTML={{ __html: descriptions.text3 }} />
            <Subscription />
          </div>
        </div>
        <div className={footerStyles[`${footerClassName}__copyright`]}>
          <p dangerouslySetInnerHTML={{ __html: copyright }} />
        </div>
      </div>
    </footer>
  );
};

export { Footer };
