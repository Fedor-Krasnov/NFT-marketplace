import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from './media/logo.svg';
import './Logo.scss';

const Logo = () => (
  <div className="logo">
    <Link to="/">
      <img src={logoImage} alt="logo" />
    </Link>
    <Link to="/">NFT Marketplace</Link>
  </div>
);

export { Logo };
