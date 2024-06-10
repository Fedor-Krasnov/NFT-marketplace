import React from 'react';
import { usePageContext } from '../../../contexts';
import { PageSeo } from '../PageSeo';
import { sectionsCollection } from './helpers/sectionsCollection';

const PageContent = () => {
  const { pageData } = usePageContext();
  const { sections, seo } = pageData;

  return (
    <>
      <PageSeo seo={seo} />
      {sections.length ? sectionsCollection(sections) : null}
    </>
  );
};

export { PageContent };
