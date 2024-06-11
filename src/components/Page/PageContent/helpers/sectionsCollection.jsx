import React from 'react';
import classNames from 'classnames';
import { sectionTypeToComponentMap } from '../../../sections/sectionTypes';
import { pageContentSectionClassName } from '../../constants';
import pageContentStyles from '../PageContent.module.scss';

export const sectionsCollection = (sections) => {
  return sections.map(({ content, marginBottom, type, width }) => {
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
          pageContentStyles[`${pageContentSectionClassName}_margin-bottom-${marginBottom}`],
          pageContentStyles[`${pageContentSectionClassName}_width-${width}`],
        )}
        key={type}
      >
        <PageSection content={content} />
      </section>
    );
  });
};
