import React from 'react';
import tagStyles from './Tag.module.scss';

const tagClassName = 'tag';

const Tag = ({ data }) => <li className={tagStyles[tagClassName]} dangerouslySetInnerHTML={{ __html: data }} />;

export { Tag };
