import React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import pageStyles from './Page.scss';

const pageClassName = 'page';

const Page = ({ children }) => (
  <div className={pageStyles[pageClassName]}>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export { Page };
