import React from 'react';
import './Tag.scss';

const tagClassName = 'tag';

const Tag = ({ data }) => <li className={tagClassName} dangerouslySetInnerHTML={{ __html: data }}></li>;

export { Tag };
