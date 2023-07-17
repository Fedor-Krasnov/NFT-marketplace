import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from './media/logo.svg';

const Logo = () => (
  <div className="logo">
    <Link to="/">
      <img src={logoImage} className="main__logo" alt="logo" />
    </Link>
    <Link to="/" className="main__text__logo">
      NFT Marketplace
    </Link>
  </div>
);

export { Logo };
