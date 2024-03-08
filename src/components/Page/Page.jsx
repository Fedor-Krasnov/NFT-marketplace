import React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';

const Page = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export { Page };
