import React from 'react';
import { usePageContext } from '../../../contexts';
import { sectionsCollection } from './helpers/sectionsCollection';

const PageContent = () => {
  const { pageData } = usePageContext();
  const { sections } = pageData;

  return <>{sections.length ? sectionsCollection(sections) : null}</>;
};

export { PageContent };
