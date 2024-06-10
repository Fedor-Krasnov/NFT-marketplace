import React from 'react';
import classNames from 'classnames';
import { Button } from '../Button';
import titleStyles from './Title.module.scss';
import { DescriptionSize, TitleSize } from './types';

const titleClassName = 'title';

const Title = ({
  className,
  buttonIcon,
  buttonTitle,
  description,
  descriptionSize = DescriptionSize.normal,
  heading = TitleSize.h2,
  title,
  to,
}) => {
  const CustomTag = heading;

  return (
    <div className={classNames(titleStyles[titleClassName], className)}>
      <div>
        <CustomTag dangerouslySetInnerHTML={{ __html: title }} />
        {description && (
          <p
            className={titleStyles[`${titleClassName}__description-size-${descriptionSize}`]}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
      </div>
      {buttonTitle && (
        <div className={titleStyles[`${titleClassName}__button`]}>
          <Button icon={buttonIcon} outline title={buttonTitle} to={to} />
        </div>
      )}
    </div>
  );
};

export { Title };
