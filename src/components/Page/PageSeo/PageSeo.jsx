import React from 'react';
import { Helmet } from 'react-helmet';

const PageSeo = ({ seo }) => {
  const { title, description, keywords } = seo;

  return (
    <Helmet>
      <title>{title}</title>
      <meta content={description} name="description" />
      <meta content={keywords} name="keywords" />
    </Helmet>
  );
};

export { PageSeo };
