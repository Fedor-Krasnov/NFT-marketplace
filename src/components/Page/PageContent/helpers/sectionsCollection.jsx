import React from 'react';
import classNames from 'classnames';
import { sectionTypeToComponentMap } from '../../../sections/sectionTypes';
import { pageContentSectionClassName } from '../../constants.js';
import pageContentStyles from '../PageContent.module.scss';

export const sectionsCollection = (sections) =>
  sections.map(({ content, type }) => {
    const PageSection = sectionTypeToComponentMap[type];

    if (!PageSection) {
      console.warn(`Unknown section type ${type}`);

      return null;
    }

    return (
      <section
        className={classNames(
          pageContentStyles[pageContentSectionClassName],
          pageContentStyles[`${pageContentSectionClassName}_${type}`],
        )}
        key={type}
      >
        <PageSection content={content} />
      </section>
    );
  });
